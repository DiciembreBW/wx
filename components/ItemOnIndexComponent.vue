<template>
    <div class="card">
        <div class="card-header">
            <p class="card-header-title is-size-5" v-if="data.brand"> {{data.brand}} {{data.version}} </p>
        </div>

        <div class="card-content" v-if="data">
            <div class="content">
                <div>
                    <span class="label-item"> <b>ชื่อ</b>  {{data.firstname}}</span>
                    <span class="label-item"> <b>นามสกุล</b>  {{data.lastname}}</span>
                    <span class="label-item"> <b>ทะเบียนรถ</b>  {{data.plate}}</span>
                    <span class="label-item"> <b>บริษัทประกัน</b>  {{data.insuranceCorp}}</span>
                    <span class="label-item"> <b>ประเภทประกัน</b>  {{data.insuranceUnit}}</span>
                    <span class="label-item"> <b>พ.ร.บ.</b>  {{data.insuranceType}}</span>
                </div>

                <div>
                    <span class="label-item"> <b>วันหมดประกัน </b>  {{data.pragun}}</span> <br>
                    <span class="label-item"> <b>วันหมดภาษี </b>  {{data.pasee}}</span> <br>
                    <span class="label-item"> <b>วันหมด พ.ร.บ. </b>  {{data.grommatun}}</span>
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

