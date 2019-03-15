<template lang="pug">
    div(v-if="data") {{Object.values(data)[0]}}
        span {{data}}
        span(data-target="modal1").modal-trigger
            i.material-icons edit
        .modal#modal1
            .modal-content
                //- input(v-model="data[Object.keys(data)]")
                input(v-model="data")
            .modal-footer 
                button(@click="()=>edit(data)").modal-close.btn-flat บันทึก
</template>

<script>
export default {
    props: {
        data:{
            
        },
        edit: {

        },
        field: {}
    },
   
   data () {
       return {
        //    value: Object.values(this.data)
       }
   },
    mounted () {
        this.$materialize.modal()
    }
}
</script>

<style>

</style>
