<template>
  <div>
    <items-component :data="itemsData"/>
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
