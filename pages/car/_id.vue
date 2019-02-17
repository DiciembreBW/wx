<template>
    <div class="container">
        <h1 class="title">  {{items.name}} </h1>
        <table class="table">
            <tbody>
                <tr v-for="(item, index) in items.version" :key="index">
                    <td>{{item}}</td>
                    <td>
                        <a @click="remove(index)">
                            <span class="icon">
                                <i class="fas fa-trash-alt"></i>
                            </span>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td> <input type="text" class="input" v-model="version"> </td>
                    <td> <a @click="add">เพิ่ม</a> </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import testFirestore from '@/plugins/boydPlugins'

let car = new testFirestore('cr')

export default {
    async asyncData({params}) {
        let resault = await car.getDocumentByName(params.id)
        return {
            items: resault,
            version: ''
        }
    },

    methods: {
        add: async function () {
            // console.log('add.')
            if (this.version) {
                // push to state
                this.items.version.push(this.version)
                
                // update items
                car.updateDocumentByName(this.$route.params.id, this.items)

                // remove text
                this.version = ''
            }
        },

        remove: function (index) {
                this.items.version.splice(index, 1)
                car.updateDocumentByName(this.$route.params.id, this.items)
             // console.log('pass')
        }
    }
}
</script>

<style>

</style>
