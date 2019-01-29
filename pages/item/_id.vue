<template>
    <div>
        <!-- {{$route.params.id}} -->
        <!-- {{item}} -->
        <items-component :data="item"></items-component>
    </div>
</template>
<script>
import ItemsComponent from '@/components/ItemsComponent'
import {fireDb} from '@/plugins/Firestore'

export default {
    components: {
        ItemsComponent
    },
    async asyncData({app, params, error}) {
        // read data from firestore
        const ref = fireDb.collection('cars').doc(params.id)

        let snap
        try {
            snap = await ref.get()
        } catch (err) {
            console.log(err)
        }

        return {
            item: snap.data()
        }
    }
}
</script>
