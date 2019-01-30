<template>
    <div>
        <items-component :data="item"></items-component>
    </div>
</template>
<script>
import ItemsComponent from '@/components/ItemsComponent'
import  {Firestore} from '@/plugins/boydPlugins'

// Firestore.getDoc({databaseName: 'cars'})
export default {
    components: {
        ItemsComponent
    },
    async asyncData({app, params, error}) {
        let data = await Firestore.getDoc({databaseName: 'cars', docName: params.id})
        // read data from firestore
        return {
            item: data
        }
    }
}
</script>
