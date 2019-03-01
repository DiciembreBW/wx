<template>
    <div>
        <h1 class="subtitle"> {{data.firstname}} {{data.lastname}} </h1>
        <hr>
        <p>เลขที่{{data.address}} ตำบล{{data.subdistrict}} อำเภอ{{data.district}} จังหวัด{{data.province}} </p>
        <p>ยี่ห้อ{{data.brand}}  รุ่น{{data.version}} ขนาดเครื่องยนต์{{data.cc}} ปีรถ{{data.years}} </p>
        <pre> {{data}} </pre>
    </div>
    
    <!-- <div class="container">
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
    </div> -->
</template>
<script>
import Firestore from '@/plugins/boydPlugins'

const car = new Firestore('cars')
export default {
    data () {
        car.getDocumentByName(this.$route.params.id)
            .then(e=> this.data = e)
        return {
            data: {},
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
