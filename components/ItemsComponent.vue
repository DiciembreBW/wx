<template>
    <div>
        <div class="card" style="margin-bottom: 8px">
        <div class="card-header">
            <p class="card-header-title" v-if="data">
                {{data.brand}} {{data.version}}
                <a @click="remove">ลบ</a>
            </p>
        </div>
        <div class="card-content">
            <div class="content">
            <div v-if="data">
                <span class="label-item"> <b>ขนาดเครื่องยนต์ </b> {{data.cc}} </span>
                <span class="label-item"> <b>สี</b>  {{data.color}}</span>
                <span class="label-item"> <b>ปีรถ</b>  {{data.year}}</span>
            </div>
            
            <div v-if="data">
                <span class="label-item"> <b>ชื่อ</b>  {{data.fistname}}</span>
                <span class="label-item"> <b>นามสกุล</b>  {{data.lastname}}</span>
                <span class="label-item"> <b>เพศ</b>  {{data.sex}}</span>
                <span class="label-item"> <b>เลขบัตรประจำตัวประชาชน</b>  {{data.idcard}}</span>
                <span class="label-item"> <b>ที่อยู่</b>  {{data.address}}</span>
            </div>

            <div v-if="data">
                <span class="label-item"> <b>วันหมดประกัน (วัน/เดือน/ปี พ.ศ.)</b>  {{data.pragun}}</span>
                <span class="label-item"> <b>วันหมดภาษี (วัน/เดือน/ปี พ.ศ.)</b>  {{data.pasee}}</span>
                <span class="label-item"> <b>วันหมดกรรมธรรม์(วัน/เดือน/ปี พ.ศ.)</b>  {{data.grommatun}}</span>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import {Firestore} from '@/plugins/boydPlugins'

export default {
    props: {
        data: {type: Object, required: true}
    },

    data: function () {
        return {
        }
    },

    methods: {
        remove: function ({router}) {
            Firestore.removeDoc({databaseName: 'cars', id: this.$route.params.id})
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
    .card-header-title > a {
        /* background-color: aliceblue; */
        padding: 0 24px;
    }
</style>
