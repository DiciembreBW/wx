<template>
    <div>
        {{data}}
        <a @click="remove">ลบ</a>
    </div>
</template>

<script>
import {Firestore} from '@/plugins/boydPlugins'

export default {
    props: {
        data: {type: Object} 
    },
    
    data () {
        return {}
    },

    methods: {
        remove: function () {
            Firestore.removeDoc({
                databaseName: 'customers',
                id: this.data._key
            })
        }
    }
}
</script>
