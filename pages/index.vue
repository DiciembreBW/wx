<template>
  <div>
    <!-- <items-component :data="text"/> -->
    <li v-for="(item, index) in text" :key="index">
      <nuxt-link :to="{name: 'ItemPage', params: item.id}"> {{item.id}} </nuxt-link>
    </li>
  </div>
</template>

<script>
// import component
import ItemsComponent from '@/components/ItemsComponent'
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
    ItemsComponent
  }
  
}
</script>

<style>
</style>
