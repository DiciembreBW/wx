<template>
  <div class="container">
    <h1 class="title">พ.ร.บ.</h1>
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
            <tr v-for="(item, index) in data" :key="index">
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
import testFirestore, {Firestore} from '@/plugins/boydPlugins'

import pg from '@/plugins/plugins'

let PRB = new testFirestore('prbs')

export default {
  data () {
    return {
      fields: [
        {name: 'name', desc: 'ชื่อ พรบ'}
      ],
      data: PRB.data
    }
  },

  methods: {
    save: function () {
      PRB.addDocument(this.VALUES.set)
    },

    remove: function(_key) {
      PRB.removeDocument(_key)
    }
  },

  components: {
    CleaveComponent
  }

}
</script>

<style>

</style>
