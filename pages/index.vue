<template>
<div>
  <!-- index -->
  <!-- <div class="row">
    <input type="text" v-model="text" class="input" @keyup="handle" placeholder="ค้นหา">
  </div> -->
  <item-on-index-component :data="item" />
</div>
 
</template>

<script>
import ItemOnIndexComponent from '@/components/ItemOnIndexComponent.vue'
import testFirestore from '@/plugins/boydPlugins'
import _ from 'lodash'

const item = new testFirestore('cars')
import fuse from 'fuse.js'

export default {
  components: {ItemOnIndexComponent},
  data () {
    return {
      item: item.data,
      text: ''
    }
  },

  methods: {
    handle: function (event) {
      // const f = new fuse(this.item, {keys: ['firstname', 'lastname', 'plate']})
      if(this.text) {
          this.item = new fuse(this.item, {keys: ['firstname', 'lastname']}).search(this.text)
        // this.item = f.search(this.text)
      } else {
        item.onSnapshot().then(data => this.item = data)
      }
    }
  }
}
</script>
