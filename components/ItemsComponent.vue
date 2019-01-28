<template>
    <div>
        <div class="card" v-for="(item, index) in data" :key="index" style="margin-bottom: 8px">
        <div class="card-header">
            <p class="card-header-title" v-if="item.carbrand">{{item.carbrand.name}} {{item.carbrand.version}} </p>
        </div>
        <div class="card-content">
            <div class="content">
            <div v-if="item.car">
                <span class="label-item"> <b>ขนาดเครื่องยนต์ </b> {{item.car.cc}} </span>
                <span class="label-item"> <b>สี</b>  {{item.car.color}}</span>
                <span class="label-item"> <b>ปีรถ</b>  {{item.car.cc}}</span>
            </div>
            
            <div v-if="item.customer">
                <span class="label-item"> <b>ชื่อ</b>  {{item.customer.fistname}}</span>
                <span class="label-item"> <b>นามสกุล</b>  {{item.customer.lastname}}</span>
                <span class="label-item"> <b>เพศ</b>  {{item.customer.sex}}</span>
                <span class="label-item"> <b>เลขบัตรประจำตัวประชาชน</b>  {{item.customer.idcard}}</span>
                <span class="label-item"> <b>ที่อยู่</b>  {{item.customer.address}}</span>
            </div>

            <div v-if="item.info">
                <span class="label-item"> <b>วันหมดประกัน (วัน/เดือน/ปี พ.ศ.)</b>  {{item.info.pragun}}</span>
                <span class="label-item"> <b>วันหมดภาษี (วัน/เดือน/ปี พ.ศ.)</b>  {{item.info.pasee}}</span>
                <span class="label-item"> <b>วันหมดกรรมธรรม์(วัน/เดือน/ปี พ.ศ.)</b>  {{item.info.grommatun}}</span>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {type: Array, required: true}
    },

    data: function () {
        return {
        }
    }
}
</script>
