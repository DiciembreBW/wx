<template>
  <div>
    <h1>เพิ่ม</h1>
    <v-input v-model="data.text">ยี่ห้อรถ</v-input>
    <button class="button" @click="push">เพิ่ม</button>
    <hr>
    <ol>
      <li v-for="(item, index) in brand" :key="index"> {{item}} </li>
    </ol>
    <p>
      <button @click="save">บันทึก</button>
    </p>
  </div>
</template>

<script>
  // import components
  import Input from '@/components/form/input'

  // https://medium.com/@pascalluther/nuxt-js-v1-firestore-and-ssr-73e3140574fc
  import { fireDb } from '~/plugins/firebase.js'

  export default {
    components: {
      'v-input': Input
    },
    data: () => {
      return {
        brand: [],
        data: {}
      }
    },

    methods: {
      push: function (e) {
        let {brand, data} = this
        brand.push(data.text)
      },
      save: function () {
      }
    }
    
  }

</script>
