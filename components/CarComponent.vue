<template>
  <div class="field">
    <h1 class="title">Car Component</h1>
    <div class="field">
      <label class="label">ยี่ห้อ</label>
      <div class="control">
        <div class="select is-fullwidth">
          <select v-model="brand">
            <option v-for="(item, index) in car" :key="index" :value="item._key"> {{item._key}} </option>
          </select>
        </div>
      </div>
    </div>
    <div class="field">
        <label class="label">รุ่นรถ</label>
        <div class="control">
            <div class="select is-fullwidth">
                <select v-model="version">
                    <option v-for="(item, index) in filterVersion" :key="index" :value="item">{{item}}</option>
                </select>
            </div>
        </div>
    </div>
    <div class="field">
        <label class="label">สี</label>
        <div class="control">
            <input type="text" class="input">
        </div>
    </div>


    <div class="field">
        <label class="label">ปี (พ.ศ.)</label>
        <div class="control">
            <input type="text" class="input">
        </div>
    </div>


    <div class="field">
        <label class="label">ขนาดเครื่องยนต์</label>
        <div class="control">
            <input type="text" class="input">
        </div>
    </div>

    <div class="field is-grouped is-grouped-centered">
        <div class="control">
            <button v-if="apply" class="button" @click="apply({brand: brand, version: version})">apply</button>
        </div>
    </div>
  </div>
</template>

<script>
import testFirestore from '@/plugins/boydPlugins'
import _ from 'lodash'

let car = new testFirestore('car')

export default {
  props: {
      apply: {type: Function}
  },

  data () {
    car.onSnapshot().then(e => this.car = e)
    return {
      car: [],
        brand: '',
        version: '',
        filterVersion: []
    }
  },

  computed: {
      filterCarVersion: function () {
          let data = []
          _.filter(this.car, item => {
              if (this.brand == item._key) {
                  data = item.options
              }
          })
          
          return data
      }
  },

  watch: {
    brand: function (selected) {
        this.filterVersion = []
        this.version = ''
      _.filter(this.car, item => {
        if (this.brand == item._key) {
          this.filterVersion = item.options
        }
      })

    }
  }

}
</script>
