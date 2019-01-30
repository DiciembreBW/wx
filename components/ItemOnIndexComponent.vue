<template>
    <div class="card">
        <div class="card-header">
            <p class="card-header-title is-size-5" v-if="data.brand"> {{data.brand}} {{data.version}} </p>
        </div>

        <div class="card-content" v-if="data">
            <div class="content">
            <!-- <div v-if="data.car"> -->
                <!-- <span class="label-item"> <b>ขนาดเครื่องยนต์ </b> {{data.car.cc}} </span> -->
                <!-- <span class="label-item"> <b>สี</b>  {{data.car.color}}</span> -->
                <!-- <span class="label-item"> <b>ปีรถ</b>  {{data.car.cc}}</span> -->
            <!-- </div> -->
            
            <div>
                <span class="label-item"> <b>ชื่อ</b>  {{data.fistname}}</span>
                <span class="label-item"> <b>นามสกุล</b>  {{data.lastname}}</span>
                <!-- <span class="label-item"> <b>เพศ</b>  {{data.customer.sex}}</span> -->
                <!-- <span class="label-item"> <b>เลขบัตรประจำตัวประชาชน</b>  {{data.customer.idcard}}</span> -->
                <!-- <span class="label-item"> <b>ที่อยู่</b>  {{data.customer.address}}</span> -->
            </div>

            <div>
                <span class="label-item"> <b>วันหมดประกัน </b>  {{data.pragun}}</span> <br>
                <span class="label-item"> <b>วันหมดภาษี </b>  {{data.pasee}}</span> <br>
                <span class="label-item"> <b>วันหมดกรรมธรรม์ </b>  {{data.grommatun}}</span>
            </div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    props: {
        data: {type: Object, required: false}
    },

    data () {
        return {}
    }
}
</script>

<style scoped>
.card {
    width: 320px;
    margin:  5px;
}
</style>

