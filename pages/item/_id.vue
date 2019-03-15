<template lang="pug">
    .container
        .card
            .card-image
            .card-stacked
                .card-content.row
                    p {{$route.params}}
                    .col.s12
                        field-component(:data="item.data().customer.firstname" :edit="edit")
                        customer(:data="item.data().customer")
                    .col.s4
                        addr(:data="item.data().address")
                    .col.s4
                        car(:data="item.data().car")
                    .col.s4
                        insr(:data="item.data().insurance")
                .card-action
                div.container {{item.data().customers}}
                    //- nuxt-link(:to="'/item/edit/'+$route.params.id") 
                    //-     i.material-icons edit
</template>

<script>
import Customer from '@/components/foo/customer'
import Addr from '@/components/foo/address'
import Car from '@/components/foo/car'
import Insr from '@/components/foo/insurance'

import FieldComponent from '@/components/form/FieldComponent'

import Firestore from '@/plugins/fb'
let Item = new Firestore('items')
export default {
    mounted () {
        console.log()
        this.$materialize.modal()
    },
    components: {
        Customer,
        Addr,
        Car,
        Insr,

        FieldComponent
    },
    async asyncData ({params}) {
        return {
            item: await Item.root.doc(params.id).get(),
        }
    },

    methods: {
        edit: function (callbackValue, field) {
            const id = this.$route.params.id
            
            console.log(callbackValue)
        }
    }
    
}
</script>

<style>

</style>
