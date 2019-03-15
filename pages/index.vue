<template lang="pug">
.row
  .col.s12.l5
    a-side
  .col.s12.l7
    .section
      .row
        thumb(v-for='item in item'
          :data="item"
          :onCancel='()=>remove(item.id)'
        )
          span {{item.id}}
          //- :title=""

</template>

<script>
import ASide from '@/components/aside.vue'
import Thumb from '@/components/thumb.vue'
import Firebase from '@/plugins/fb'
const Item = new Firebase('items')
Item.snapShot()

export default {
  components: {
    ASide,
    Thumb
  },

  data() {
    return {
      item: Item.$_data
    }
  },

  methods: {
    remove: function (id) {
      // Item.root.doc(id).delete()
      // console.log(id)
      if (confirm('ต้องการลบหรือไม่') && id) Item.root.doc(id).delete()
    }
  }
}
</script>
