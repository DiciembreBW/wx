<template>
    <div class="container">
        <!-- {{$route.params.id}} -->
        <div class="field" v-for="(item, index) in Object.keys(data)" :key="index">
            <label>{{item}}</label>
            <div class="control">
                <input type="text" v-model="data[item]" class="input">
            </div>
        </div>
        <div class="field">
            <button @click="remove">ลบ</button>
            <button @click="update">แก้ไข</button>
        </div>
    </div>
</template>
<script>
import testFirestore from '@/plugins/boydPlugins'

const car = new testFirestore('cars')
export default {
    data () {
        car.getDocumentByName(this.$route.params.id).then(e=> this.data = e)
        return {
            data: [],
            value: {}
        }
    },

    methods: {
        remove: function() {
            car.removeDocument(this.$route.params.id)
            this.$router.push('/item')
        },

        update: function () {
            car.updateDocumentByName(this.$route.params.id, )
        }
    }
}
</script>
