<template>
  <div class="container">
    <h1 class="title">รถ</h1>
    <div class="columns">
      <div class="column is-one-third">
        <div class="field" v-for="(item, index) in fields" :key="index">
          <cleave-component v-model="value.value" :Cleave="item" />
        </div>
        <div class="field">
          <button class="button" @click="addBrand">เพิ่ม</button>
        </div>
         <hr>
        <div v-if="selected.value">
            <span @click="removeBrand(selected.value.value)"> ลบยี่ห้อ </span> {{selected.value.value}}
        </div>
      </div>
      <div class="column">

        เลือกยี่ห้อ <vue-multiselect v-model="selected" :options="data" label="_key"/>
        <br>
        <br>
       <table class="table is-fullwidth">
          <thead>
            <tr>
              <td>รายการ</td>
              <td>ลบ</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in selected.options" :key="index">
              <td>{{item}}</td>
              <td> <a @click="removeOption(index)"> - </a> </td>
            </tr>
            <tr>
              <td> <input v-if="toggle" type="text" @keyup.enter="addOption"></td>
              <td @click="toggle = !toggle">toggle</td>
            </tr>
          </tbody>
        </table>

        <div class="field" style="margin-top: 13px;">
          <button class="button is-fullwidth" @click="save">บับทึก</button>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import CleaveComponent from '@/components/CleaveComponent'
import testFirestore, {Firestore} from '@/plugins/boydPlugins'

import pg from '@/plugins/plugins'

let CAR = new testFirestore('car')

export default {
  // mixins: [pg],

  data () {
    Firestore.get('colors').then(data => this.VALUES.get= data)
    return {
      fields: [
        {name: 'name', desc: 'เพิ่มยี่ห้อรถ'}
      ],
      data: CAR.data,
      selected: {},
      value: {
        options: []
      },
      toggle: false
    }
  },

  methods: {
    save: function () {
      CAR.addDocumentByName(this.selected)
    },

    removeBrand: function(_key) {
      CAR.removeDocument(_key)
      this.$router.push('/')
    },

    addBrand: function() {
      CAR.addDocumentByName(this.value)
    },

    addOption: function($event) {
      let value = $event.target.value
      if (value) this.selected.options.push(value)
      $event.target.value = ''
    },

    removeOption: function (index) {
      this.selected.options.splice(index, 1)
    }
  },

  components: {
    CleaveComponent
  }

}
</script>

<style>

</style>
