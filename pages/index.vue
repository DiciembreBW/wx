<template>
  <div>
    
    <!-- <select-component :data="fields"></select-component> -->

    <select v-model="fieldSearch">
      <option v-for="(item, index) in fields" :key="index" :value="item.field">
        {{item.field}}
      </option>
    </select>

    {{fieldSearch}}
    
    <div class="field">
      <label class="label"></label>
      <div class="control">
        <input type="text" @keyup.enter="searchItemFormFirestore($event)" class="input" placeholder="ค้นหา">
      </div>
    </div>

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
import SelectComponent from '@/components/form/SelectComponent'
import {fireDb} from '@/plugins/Firestore'

import Data from '@/static/initialData.json'

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
      text: item,
      fields: Data.fields,
      fieldSearch: ''
    }
  },

  components: {
    ItemsComponent,
    ItemOnIndexComponent,
    SelectComponent
  },

  methods: {
    searchItemFormFirestore: async function (event) {
      let value = event.target.value
      console.log(value)
    }
  }
  
}
</script>

<style>
</style>
