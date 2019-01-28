<template>
  <div>
    <!-- <items-component :data="itemsData"/> -->
    <div class="card" v-for="(item, index) in itemsData" :key="index">
      <div class="card-header">
        <p class="card-header-title" v-if="item.carbrand">
          {{item.carbrand.name}} {{item.carbrand.version}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import component
import ItemsComponent from '@/components/ItemsComponent'

import {db} from '@/plugins/Firestore'

export default {
  mounted () {
    db.collection('cars').get().then(snapshot => {
      snapshot.forEach(docRef => {
        this.itemsData.push(docRef.data())
      })
    })
  },
  
  data: function () {
    return {
      itemsData: []
    }
  },

  components: {
    ItemsComponent
  }
  
}
</script>

<style scoped>
.button {
  width: 100%;
}
</style>
