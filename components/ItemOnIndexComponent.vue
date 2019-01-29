<template>
    <div class="card" v-if="data" style="margin-bottom: 12px;">
        <div class="card-header">
            <p class="card-header-title" v-if="data.carbrand"> {{data.carbrand.name}} {{data.carbrand.version}} </p>
        </div>

        <div class="card-content">
            <div class="content">
            <!-- <div v-if="data.car"> -->
                <!-- <span class="label-item"> <b>ขนาดเครื่องยนต์ </b> {{data.car.cc}} </span> -->
                <!-- <span class="label-item"> <b>สี</b>  {{data.car.color}}</span> -->
                <!-- <span class="label-item"> <b>ปีรถ</b>  {{data.car.cc}}</span> -->
            <!-- </div> -->
            
            <div v-if="data.customer">
                <span class="label-item title"> <b>ชื่อ</b>  {{data.customer.fistname}}</span>
                <span class="label-item title"> <b>นามสกุล</b>  {{data.customer.lastname}}</span>
                <!-- <span class="label-item"> <b>เพศ</b>  {{data.customer.sex}}</span> -->
                <!-- <span class="label-item"> <b>เลขบัตรประจำตัวประชาชน</b>  {{data.customer.idcard}}</span> -->
                <!-- <span class="label-item"> <b>ที่อยู่</b>  {{data.customer.address}}</span> -->
            </div>

            <div v-if="data.info">
                <span class="label-item"> <b>วันหมดประกัน </b>  {{data.info.pragun}}</span> <br>
                <span class="label-item"> <b>วันหมดภาษี </b>  {{data.info.pasee}}</span> <br>
                <span class="label-item"> <b>วันหมดกรรมธรรม์ </b>  {{data.info.grommatun}}</span>
            </div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    props: {
        data: {type: Object, required: true}
    },

    data () {
        return {}
    }
}
</script>
