<template>
<div>
  <!-- index -->
  <item-on-index-component :data="item" />
</div>
 
</template>

<script>
import ItemOnIndexComponent from '@/components/ItemOnIndexComponent.vue'
import testFirestore from '@/plugins/boydPlugins'

const item = new testFirestore('cars')
export default {
  components: {ItemOnIndexComponent},
  data () {
    return {
      item: item.data
    }
  }
}
</script>
