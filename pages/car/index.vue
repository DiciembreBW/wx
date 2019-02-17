<template>
  <div>
    <table class="table">
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td> <nuxt-link :to="'/car/'+item._key">{{item.name}} {{item.version.length}}</nuxt-link> </td>
          <td> <a @click="remove(item._key)"> <span class="icon"> <i class="fas fa-trash"></i> </span> </a> </td>
        </tr>

        <tr>
          <td> <input type="text" class="input" v-model="brand"> </td>
          <td> <button class="button" @click="add">เพิ่ม</button> </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
import testFirestore from '@/plugins/boydPlugins'

let car = new testFirestore('cr')
export default {
  data () {
    car.onSnapshot().then(data => {
      this.items = data
    })
    return {
      items: car.data,
      brand: ''
    }
  },
  

  methods: {
    add: async function () {
        car.addDocument({
          name: this.brand,
          version: []
        })

      this.items = await car.onSnapshot()    
      this.brand = ''
    },

    remove: async function (key) {
      // this.items.splice(index, 1)
      car.removeDocument(key)
      this.items = await car.onSnapshot()    
    }
  },

  components: {
  }

}
</script>

<style>

</style>
