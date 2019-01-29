<template>
  <div>
    <!-- <items-component :data="text"/> -->
    <div v-for="(item, index) in text" :key="index">
      <nuxt-link :to="'item/'+item.id">  
        <item-on-index-component :data="item" />
      </nuxt-link>
    </div>

  </div>
</template>

<script>
// import component
import ItemsComponent from '@/components/ItemsComponent'
import ItemOnIndexComponent from '@/components/ItemOnIndexComponent'
import {fireDb} from '@/plugins/Firestore'

export default {
  
  async asyncData ({app, params, error}) {
    let item = []
    const ref = fireDb.collection('cars').get().then(e=> {
      e.forEach(snap => {
        item.push({
          ...snap.data(),
          id: snap.id
        })
      })
    })

    return {
      text: item
    }
  },

  components: {
    ItemsComponent,
    ItemOnIndexComponent
  }
  
}
</script>

<style>
</style>
