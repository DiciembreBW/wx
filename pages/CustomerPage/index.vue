<template>
  <div>
    <h1 class="title is-4" @click="getComponent">ข้อมูลลูกค้า</h1>
    <a class="subtitle" @click="addComponent">เพิ่ม</a>
    <hr>

    <keep-alive>
      <component :is="componentId" @handleComponent="handleMethod" :data="dataFromComponent"></component>
    </keep-alive>

  </div>
</template>

<script>
// component layout
import get from '@/components/CustomerComponents/get'
import add from '@/components/CustomerComponents/add'

// plugin
import testFirestore, {Firestore} from '@/plugins/boydPlugins'

let customer = new testFirestore('customers')
export default {
  
  data: function () {
    
    customer.onSnapshot().then(data => this.dataFromComponent = data)
    return {

      data: [],
      componentId: get,
      dataFromComponent: ''
    }
  },

  methods: {
      save: function () {
          Firestore.add({
              databaseName: 'customers',
              value: this.value
          })
      },

      addComponent: function () {
        this.componentId = add
      },
      getComponent: function () {
        this.componentId = get
      },

      handleMethod: function ({component, data}) {
        this.componentId = component
        if (data) {
          this.dataFromComponent = data
        }
      }
  },

  computed: {
   
  }
}
</script>

<style scoped>
.button {
  width: 100%;
}
</style>
