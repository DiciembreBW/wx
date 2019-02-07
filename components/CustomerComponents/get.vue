<template>
    <div>
        <ol>
            <li v-for="(item, index) in items" :key="index">
                {{item.firstname}}
                {{item.lastname}}
                <a @click="foo(item)">get item</a>
            </li>
        </ol>

    <table class="table is-fullwidth is-narrow">
      <thead>
        <tr>
          <td>ชื่อ นามสกุล</td>
          <td>เบอร์โทรศัพท</td>
          <td>จังหวัด</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td>{{item.firstname}} {{item.lastname}}</td>
          <td> {{item.phone}} </td>
          <td> {{item.province}} </td>
        </tr>
      </tbody>
    </table>
    </div>
</template>

<script>
import {Firestore} from '@/plugins/boydPlugins'
import item from '@/components/CustomerComponents/item'

export default {
    props: {
        data: {}
    },

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
