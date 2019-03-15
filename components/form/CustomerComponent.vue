<template lang="pug">
    <div>
      h5 ข้อมูลลูกค้า
      div.row(v-for='cust in $store.state.Datas.customer.fields')
        div.col.s12
          div.input-field
            input.validate(:placeholder='cust.label'
              v-model="value[cust.name]"
              :name='cust.name'
              v-validate='cust.validate'
            )
            span.helper-text.red-text {{errors.first(cust.name)}}
      .input-field
        v-button(:onClick='next') ถัดไป
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
            name: 'customer',
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
