<template lang="pug">
    .card.horizontal
        .card-image
        .card-stacked
            .card-content
                h4 {{data.customer.firstname}} {{data.customer.lastname}}
                p
                  v-item(:text='data.customer.phone' icon="phone")
                  v-item(:text='data.customer.idcard' icon="assignment_ind")
                ul
                  li
                    p {{data.address}}
                    p {{data.car}}
                    p {{data.insurance}}
                      
                        //- v-item(:text="l.text" :icon="i.icon")
            .card-action
                a(v-if='onCancel' @click="onCancel")  
                    i.material-icons delete
                nuxt-link(:to="'/item/'+data.id")  
                    i.material-icons visibility
</template>

<script>
export default {
  props: {  
    data: {type: Object},
    onCancel: {type: Function}
  }
}
</script>

<style scoped>
.material-icon {
  display: inline-flex;
}
</style>

