<template>
  <div>
    <h1 class="title is-2">หน้าแรก</h1>
    <p>
      ทดสดเว็บพี่แว่น
    </p>
    <p>
      <input type="text" v-model="test">
      <button @click="add">add</button>
    </p>
    <h1 class="title">
      {{test}}
    </h1>
  </div>
</template>

<script>

import {fireDb} from '@/plugins/firebase.js'

// ทดสอบใช้ plugin
import pl from '@/plugins/med.js'
// 

export default {
  components: {
  },
  data() {
    return {
      test: 'pass'
    }
  },
  asyncData(context) {

  },
  methods: {
  // ใช้ methods จาก plugins
    add: function (context) {
      var a = this.$brand.
      set({
          collectionName: 'brand',
          data: {
            name: this.test,
          }
        }).add()
      // console.log(context)
    }
  //
  }
}
</script>

<style>
</style>
