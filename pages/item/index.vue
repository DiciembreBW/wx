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

import {mapMutations} from 'vuex'

export default {
    async asyncData() {
        let data = await Firestore.get('cars')

        console.log(data)

        return {
            data: data
        }
    },

    components: { ItemOnIndexComponent },

    methods: {
      ...mapMutations({
        inc: 'increment'
      })
    }
}
</script>

<style scoped>.item {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
