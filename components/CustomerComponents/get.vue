<template>
    <div>
        <ol>
            <li v-for="(item, index) in items" :key="index">
                {{item.firstname}}
                {{item.lastname}}
                <a @click="foo(item)">get item</a>
            </li>
        </ol>
    </div>
</template>

<script>
import {Firestore} from '@/plugins/boydPlugins'
import item from '@/components/CustomerComponents/item'

export default {
    data () {
        Firestore.get({
            databaseName: 'customers'
        })
        .then(data => {
            this.items = data
        })
        return {
            items: ''
        }
    },

    methods: {
        foo: function (data) {
            this.$emit('handleComponent', {
                component: item,
                data: data
            })
        }
    }
}
</script>
