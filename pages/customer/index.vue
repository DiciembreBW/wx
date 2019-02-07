<template>
  <div>
    <!-- {{data}} -->
    <nuxt-link to="customer/add">เพิ่มข้อมูล</nuxt-link>
    <table class="table is-fullwidth">
      <thead>
          <tr>
            <td>ชื่อ สกุล</td>
            <td> เบอร์โทรศัพท์ </td>
          </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td> <nuxt-link :to="'test/'+item._key"> {{item.customer.firstname}} {{item.customer.lastname}}</nuxt-link> </td>
          <td> {{item.customer.phone}}  </td>
          <td @click="remove(item._key)"> <span> <i class="fas fa-trash"></i> </span>  </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import testFirestore, {Firestore} from '@/plugins/boydPlugins'

let CUSTOMER = new testFirestore('customer')

export default {
  data() {
    CUSTOMER.onSnapshot().then(data => this.data = data)
    return { data: [] }
  },

  methods: {
    remove: function (_key) {
      CUSTOMER.removeDocument(_key).then(data => this.data = data)
    }
  }
}

</script>

<style>

</style>
