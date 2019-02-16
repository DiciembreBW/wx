<template>
  <div>
      <customer-component :value="value" :apply="apply"/>   
  </div>
</template>

<script>
import CustomerComponent from '@/components/CustomerComponent'
import testFirestore from '@/plugins/boydPlugins'

const customer = new testFirestore('ctm')
export default {
  components:{
      CustomerComponent
  },
  data() {
    return {
      value: {}
    }
  },
  methods: {
    apply: function (callback) {
      // console.log(callback)
      customer.addDocument(callback)
      this.$router.push('/customer')
    }
  }
}

</script>

<style>

</style>
