<template>
  <div class="container">
    <div class="fields">
      <div class="control">
        <input type="text" @keyup.enter="search"  class="input" placeholder="ค้นหา">
      </div>
    </div>
    <hr>
    <div class="item">
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <!-- <td>ระหัส</td> -->
            <td>ยี่ห้อรถ</td>
            <td>ชื่อ-นามสกุล</td>
            <td>ทะเบียนรถ</td>
            <td>เบอร์โทรศัพท์</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cars" :key="index">
            <!-- <td>{{item._key}} </td> -->
            <td>{{item.brand}} {{item.version}} </td>
            <td>{{item.firstname}} {{item.lastname}} </td>
            <td>{{item.plate}}</td>
            <td>{{item.phone}}</td>
            <td @click="remove(item._key)">
              <span>
                <i class="fas fa-trash-alt"></i>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ItemOnIndexComponent from '@/components/ItemOnIndexComponent'
import testFirestore, {Firestore} from '@/plugins/boydPlugins'


let CARS = new testFirestore('cars')

export default {
    data() {
        CARS.onSnapshot().then(data => this.cars = data)
        return {
          cars: []
        }
    },

    components: { ItemOnIndexComponent },

    methods: {
      remove: function (_key) {
        CARS.removeDocument(_key).then(data => this.cars = data)
      },

      search: function ($event) {
          let value = $event.target.value

          console.log(value)
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
