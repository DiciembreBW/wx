<template>
  <div class="row">
    
    <div class="row">
      <nuxt-link to="/customer/add">เพิ่ม</nuxt-link>
    </div>

    <div class="row">
      <table-component :data="data" />
    </div>

  </div>
</template>

<script>
import testFirestore, {Firestore} from '@/plugins/boydPlugins'
import TableComponent from '@/components/TableComponent'
let customer = new testFirestore('ctm')

export default {
  components: {
      TableComponent
    },
    data() {
      customer.onSnapshot().then(data => {
        this.data.items = data
        })
      return {
        data: {
          items: [],
          config: [
            {field: 'firstname', label: 'ชื่อ'},
            {field: 'lastname', label: 'นามสกุล'},
            {field: 'province', label: 'จังหวัด'}
          ]
        }
      }
    },
    methods: {
      apply: function (callback) {
        console.log(callback)
      }
    }
  }

</script>