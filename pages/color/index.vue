<template>
  <div class="container">
    <h1 class="title">สีรถ</h1>
    <div class="columns">
      <div class="column is-one-third">

        <div class="field" v-for="(item, index) in fields" :key="index">
          <cleave-component v-model="VALUES.set" :Cleave="item" />
        </div>

        <div class="field">
          <div class="control">
            <button @click="save()"  class="button is-fullwidth is-primary has-background-grey">เพิ่ม</button>
          </div>
        </div>
      </div>
      <div class="column">
        <table class="table is-fullwidth">
          <thead>
            <tr> <td>ลำดับ</td> <td>รายการ</td>  <td>ลบ</td> </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in VALUES.get" :key="index">
              <td>{{item._key}}</td>
              <td>{{item.value}}</td>
              <td> <button @click="remove(item._key)" class="button is-dangle">ลบ</button> </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    </div>
  </div>
</template>

<script>
import CleaveComponent from '@/components/CleaveComponent'
import {Firestore} from '@/plugins/boydPlugins'

import pg from '@/plugins/plugins'

export default {
  // mixins: [pg],

  data () {
    Firestore.get('colors').then(data => this.VALUES.get= data)
    return {
      fields: [
        {name: 'name', desc: 'สีรถ'}
      ],
    }
  },

  computed: {
  },

  methods: {
    save: function () {
      Firestore.add('colors', this.VALUES.set)
      this.$router.push('/')
    },

    remove: function(_key) {
      Firestore.removeDoc('colors', _key)
      this.$router.push('/')
    }
  },

  components: {
    CleaveComponent
  }

}
</script>

<style>

</style>
