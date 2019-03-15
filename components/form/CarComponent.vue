<template>
    <div>
      <h5>ข้อมูลรถยนต์</h5>

      <div class="row"
        v-for="(car, index) in $store.state.Datas.car.fields" :key="index"
      >
        <div class="col s12">
          <div class="input-field">
            {{car.label}}
            <input type="text"
            :name="car.name"
            :id="car.name"

            v-validate="car.validate"
            v-model="value[car.name]"
          >
          <!-- <label :for="car.name">{{car.label}}</label> -->
          <span class="helper-text red-text"> {{errors.first(car.name)}} </span>
          </div>
        </div>

      </div>
     
      <div class="input-field">
        <button class="waves-effect waves-light btn white grey-text" @click="$store.commit('decrementCurrent')">ย้อนกลับ</button>
        <button class="waves-effect waves-light btn" @click="next">ถัดไป</button>
      </div>

    </div>
</template>

<script>
export default {
  data () {
    return {
      value: {}
    }
  },
  methods: {
    next: async function () {
      const onValidate = await this.$validator.validate()

      if (onValidate) return new Promise((resolve, reject) => {
          this.$store.commit('assign', {
            name: 'car',
            value: this.value
          })
          this.$store.commit('incrementCurrent')
      })
    }
  }
}
</script>

<style>

</style>
