<template>
    <div>
        {{data}}
    </div>
</template>

<script>
import testFirestore, {Firestore} from '@/plugins/boydPlugins'
let CUSTOMER = new testFirestore('customer')

export default {
    data () {
        CUSTOMER.getDocumentByName(this.$route.params.id).then(data => {
            this.data = data
        })
        return {data: null}
    }
}
</script>

<style>

</style>
