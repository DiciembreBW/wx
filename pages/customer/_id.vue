<template>
    <div v-if="data">
        <customer-component :value="data" :edit="edit" :cancel="remove" />
    </div>
</template>

<script>
import testFirestore, {Firestore} from '@/plugins/boydPlugins'
import CustomerComponent from '@/components/CustomerComponent'
let customer = new testFirestore('ctm')

export default {
    components: {
        CustomerComponent
    },
    async asyncData ({params}) {
        let resualt = await customer.getDocumentByName(params.id)
        return {data:  resualt}
    },
    methods: {
        edit: function (callback) {
            // console.log(callback)
            customer.updateDocumentByName(this.$route.params.id, callback)
            this.$router.push('/customer')
        },
      remove: function() {
        //   remove document
          customer.removeDocument(this.$route.params.id)

        //   redirect
          this.$router.push('/customer')
      }  
    },
}
</script>

<style>

</style>
