<template>
    <div>
        <input type="text"  @keyup.enter="add">
        <!-- <pre> {{data}} </pre> -->
        <ol>
            <li v-for="(item, index) in data" :key="index">
                <a @click="remove(item._key)"> {{item.text}} </a>
            </li>
        </ol>
    </div>
</template>

<script>
import {fireDb} from '@/plugins/Firestore'
import  testFirestore from '@/plugins/boydPlugins'
import _ from 'lodash'

let test = new testFirestore('test')
export default {
    data() {
        test.onSnapshot().then(data => {
            this.data =data
        })
      return {
        data:  []
      }
    },
    methods: {
        add: function($event) {
            fireDb.collection('test').add({
                text: $event.target.value
            })
        },

        remove: function(_key) {
            test.removeDocument(_key).then(data => {
                this.data = data
            })
        }
    }
}
</script>

<style>

</style>
