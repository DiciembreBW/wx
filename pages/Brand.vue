<template>
  <div>
    <h1 class="title is-2">{{config.title}}</h1>

    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, sunt dolore rem quidem ut corporis inventore
      sint, accusantium quia aliquid amet tempore hic quae officiis rerum perferendis magni architecto! Necessitatibus!</p>

    <ul>
      <li>
        <nuxt-link to="/manage/AddBrand">เพิ่ม</nuxt-link>
        <!-- 5. cleave must have class name of element -->
        <input type="text" class="input-phone">
      </li>
    </ul>

    <button @click="complete">submit</button>

  </div>
</template>



<script>
  // https://stackoverflow.com/questions/45611073/how-can-i-combine-cleave-js-with-element-in-vue
  import Input from '@/components/form/input.vue'

  // 1. npm install --save cleave.js
  // 2. import script
  import Cleave from '../node_modules/cleave.js/dist/cleave.js'
  import CleavePhone from '../node_modules/cleave.js/dist/addons/cleave-phone.th.js'

  export default {
    // 3. use mounted method 
    mounted () {
    // 4. how to use this. >> https://nosir.github.io/cleave.js/
      let cleave = new Cleave('.input-phone', {
        phone: true,
        phoneRegionCode: 'TH'
      })
    },
    
    components: {
      'v-input': Input
    },

    data: () => {
      return {
        config: {
          title: 'Brand Page...'
        },
        user: {}
      }
    },

    methods: {
      complete: function () {}
    },

    computed: {}

  }

</script>

<style scoped>
  ul {
    display: flex;
    justify-content: center;
  }

  ul>li {
    padding: 8px 24px;
  }

</style>
