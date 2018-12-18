<template>
  <div>
    <h1 class="title is-2">brand</h1>

    <!-- props "data" << must be array -->
    <!-- get data pass emit name "pass" -->
    <S :data="dummy">เลือกห้อรถ</S>

  </div>
</template>



<script>
  import Input from '@/components/form/input.vue'
  import S from '@/components/form/select.vue'
  import {fireDb} from '@/plugins/firebase.js'

  export default {
    components: {
      'v-input': Input,
      S
    },

    asyncData() {
      let dummy = []
      fireDb.collection('brand').get().then(query => {
        query.forEach(e => dummy.push(e.id))
      })
      return { 
        dummy: dummy,
        text: ''
      }
    },

    data: () => {
      return {

      }
    },

    methods: {
    },

    computed: {}

  }

</script>

<style scoped>
  /* ul {
    display: flex;
    justify-content: center;
  }

  ul>li {
    padding: 8px 24px;
  } */

</style>
