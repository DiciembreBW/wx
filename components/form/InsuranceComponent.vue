<template lang="pug">
    //- <div>
    //-   <h5>ข้อมูล พ.ร.บ.</h5>
    //-   <div class="row" v-for="(insr, index) in $store.state.Datas.insurance.fields" :key="index">
    //-     <div class="col s12">
    //-       <div class="input-field" >
    //-         {{insr.label}}
    //-         <input type="text"
    //-           :class="insr.class"
    //-           :name="insr.name"
    //-           :id="insr.name"

    //-           v-validate="insr.validate"
    //-           v-model="value[insr.name]"
    //-           @change="(e) => value[insr.name] = e.target.value"
    //-         >
    //-         <!-- <label :for="insr.name">{{insr.label}}</label> -->
    //-         <span class="helper-text red-text"> {{errors.first(insr.name)}} </span>
    //-       </div>
    //-     </div>
    //-   </div>
    //-   <div class="input-field">
    //-     <button class="waves-effect waves-light btn white grey-text" @click="$store.commit('decrementCurrent')">ย้อนกลับ</button>
    //-     <button class="waves-effect waves-light btn" @click="next">บันทึก</button>
    //-   </div>
    //- </div>
    div
      h5 ข้อมูล พ.ร.บ.
      .row(v-for="insr in $store.state.Datas.insurance.fields")
        .col.s12
          .input-field  {{insr.label}}
          input(
            :type="insr.type || 'text'"
            :name="insr.name"
            :id="insr.name"
            :class="insr.class"
            v-validate="insr.validate"
            v-model="value[insr.name]"
            @change="(e)=> value[insr.name] = e.target.value"
          )
          span.helper-text.red-text {{errors.first(insr.name)}}
      .input-field
        button.waves-effect.waves-light.btn.white.grey-text(@click="$store.commit('decrementCurrent')") ย้อนกลับ
        button.waves-effect.waves-light.btn(@click="next") บันทึก
      //- pre {{value}}
</template>

<script>
import Firebase from '@/plugins/fb'

export default {
 data () {
    return {
      value: { }
    }
  },
  methods: {
    next: async function () {
      const onValidate = await this.$validator.validate()
      const item = new Firebase('items')
      if (onValidate) {
        // assign vuex
        this.$store.commit('assign', {
          name: 'insurance',
          value: this.value
        })

        // push data firestore
        item.root.add(this.$store.state.Value).then(() => {

          // redirect to succes page
            this.$router.push('/onSuccessPage')
        })
      }
      // const item = new this.$Firestore('items')

      // if (onValidate) return new Promise((resolve, reject) => {

      //   this.$store.commit('assign', {
      //     name: 'insurance',
      //     value: this.value
      //   })

      //     item.addDocument(this.$store.state.Value).then( () => {
      //       this.$router.push('/onSuccessPage')
      //     })

      // })
    }
  }
}
</script>

<style>

</style>
