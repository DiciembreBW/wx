<template>
    <div class="item">
        <div class="card" style="margin-bottom: 8px" v-if="data">
        <div class="card-header">
            <p class="card-header-title" >
                {{data.brand}} {{data.version}}
                
            </p>
        </div>
        <div class="card-content">
            <div class="content">
            <div v-if="data">
                <span class="label-item"> <b>ขนาดเครื่องยนต์ </b> {{data.cc}} </span>
                <span class="label-item"> <b>สี</b>  {{data.color}}</span>
                <span class="label-item"> <b>ปีรถ</b>  {{data.year}}</span>
                <span class="label-item"> <b>พ.ร.บ.</b>  {{data.insuranceUnit}}</span>
                <span class="label-item"> <b>ประเภทประกัน</b>  {{data.insuranceType}}</span>
                <span class="label-item"> <b>ประเภทประกัน</b>  {{data.insuranceCorp}}</span>
                <span class="label-item"> <b>ทะเบียนรถ</b>  {{data.plate}}</span>
            </div>
            
            <div v-if="data">
                <span class="label-item"> <b>ชื่อ</b>  {{data.firstname}}</span>
                <span class="label-item"> <b>นามสกุล</b>  {{data.lastname}}</span>
                <span class="label-item"> <b>เพศ</b>  {{data.sex}}</span>
                <span class="label-item"> <b>เลขบัตรประจำตัวประชาชน</b>  {{data.idcard}}</span>
                <span class="label-item"> <b>ที่อยู่</b>  {{data.address}}</span>
            </div>

            <div v-if="data">
                <span class="label-item"> <b>วันหมดประกัน (วัน/เดือน/ปี พ.ศ.)</b>  {{data.pragun}}</span>
                <span class="label-item"> <b>วันหมดภาษี (วัน/เดือน/ปี พ.ศ.)</b>  {{data.pasee}}</span>
                <span class="label-item"> <b>วันหมด พ.ร.บ.(วัน/เดือน/ปี พ.ศ.)</b>  {{data.grommatun}}</span>
            </div>
            </div>
        </div>
        </div>

        <div class="card">
            <a @click="remove">
            <span style="font-size: 1em; color: Tomato;">
                <i class="fas fa-trash-alt"></i>
            </span>
            ลบ
            </a>

            <a @click="remove">
            <span style="font-size: 1em; color: Tomato;">
                <i class="fas fa-edit"></i>
            </span>
            แก้ไข
            </a>
        </div>
    </div>
</template>

<script>
import {Firestore} from '@/plugins/boydPlugins'

export default {
   data () {
       const key = this.$route.params.id
       Firestore.getDoc({
           databaseName: 'cars',
           docName: key
       }).then(data => {
           this.data = data
       })
       return {
           data: null
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

    a {
        color: tomato;
    }

</style>
