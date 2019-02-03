<template>
  <div class="container">
    <div class="item">
      <div v-for="(item, index) in data" :key="index">
        <nuxt-link :to="'item/' + item._key" ii="asadad">
          <item-on-index-component :data="item" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import ItemOnIndexComponent from '@/components/ItemOnIndexComponent'
import {Firestore} from '@/plugins/boydPlugins'

export default {
    async asyncData() {
        let data = await Firestore.get({ databaseName: 'cars' })

        return {
            data: data
        }
    },

    components: { ItemOnIndexComponent }
}
</script>

<style scoped>.item {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
