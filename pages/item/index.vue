<template>
  <div class="container">
    <div class="field has-addons has-addons-centered">
  <p class="control">
    <span class="select">
      <select v-model="value.type">
        <option value="firstname">ชื่อ</option>
        <option value="phone">เบอร์โทร</option>
        <option value="plate">ทะเบียนรถ</option>
        <option value="brand">ยี่ห้อรถ</option>
      </select>
    </span>
  </p>
  <p class="control">
    <input v-model="value.name" class="input" type="text" placeholder="คำค้นหา">
  </p>
  <p class="control">
    <a class="button is-primary" @click="search">
      ค้นหา
    </a>
  </p>
</div>
    <hr>

    <div class="item">
      <table class="table is-fullwidth is-hover is-narrow is-hoverable is-bordered">
        <thead>
          <tr class="has-background-grey-lighter">
            <td>ยี่ห้อรถ</td>
            <td>ชื่อ-นามสกุล</td>
            <td>ทะเบียนรถ</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cars" :key="index">
            <td>{{item.brand}} </td>
            <td><nuxt-link :to="'item/'+item._key">{{item.firstname}} {{item.lastname}}</nuxt-link> </td>
            <td>{{item.plate}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ItemOnIndexComponent from '@/components/ItemOnIndexComponent'
import testFirestore, {Firestore} from '@/plugins/boydPlugins'

import _ from 'lodash'

let CARS = new testFirestore('cars')

export default {
    data() {
        CARS.onSnapshot().then(data => this.cars = data)
        return {
          cars: [],
          value: {}
        }
    },

    components: { ItemOnIndexComponent },

    methods: {
      remove: function (_key) {
        CARS.removeDocument(_key).then(data => this.cars = data)
      },

      search: function () {
          CARS.getWhere(this.value.type, this.value.name).then(data => {
            this.cars = data
          })
      }
    }
}
</script>

<style scoped>.item {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
