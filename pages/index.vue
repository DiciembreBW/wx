<template>
  <div>
    <div class="item">
      <div v-for="(item, index) in data" :key="index">
        <nuxt-link :to="'item/' + item._key">
          <item-on-index-component :data="item"/>
        </nuxt-link>
      </div>
    </div>   
      <!-- <pre> {{data}} </pre> -->
  </div>
</template>

<script>
// import component
import ItemsComponent from '@/components/ItemsComponent'
import ItemOnIndexComponent from '@/components/ItemOnIndexComponent'
import SelectComponent from '@/components/form/SelectComponent'
import {fireDb} from '@/plugins/Firestore'

import Data from '@/static/initialData.json'
import {Firestore} from '@/plugins/boydPlugins'


export default {
  
  async asyncData() {
    let data = await Firestore.get({databaseName: 'cars'})
    return {
      data: data
    }
  },

  components: {
    ItemsComponent,
    ItemOnIndexComponent,
    SelectComponent
  },

  methods: {
  }
  
}
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
