<template>
  <div>
    <div class="row">
      <search-component v-model="search"/>
    </div>
    <div class="row">
    <div class="item">
      <div v-for="(item, index) in data" :key="index">
        <nuxt-link :to="'item/' + item._key">
          <item-on-index-component :data="item"/>
        </nuxt-link>
      </div>
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
import SearchComponent from '@/components/SearchComponent'
import {fireDb} from '@/plugins/Firestore'

import {Firestore} from '@/plugins/boydPlugins'


export default {
  
  async asyncData() {
    let data = await Firestore.get({databaseName: 'cars'})
    return {
      data: data,
      search: ''
    }
  },

  components: {
    ItemsComponent,
    ItemOnIndexComponent,
    SelectComponent,
    SearchComponent
  },

  watch: {
    async search (value) {
      let callbackData = await Firestore.getWhere(value)
      this.data = callbackData
    }
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
