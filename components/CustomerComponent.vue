<template>
  <div>
    <!-- <h1 class="title"> Customer </h1> -->
    <div class="field">
      <label class="label">รหัสบัตรประจำตัวประชาชน</label>
      <div class="control">
        <input type="text" class="input idcard" v-model="value.idcard">
        <!-- <input type="text" class="input idcard" v-model="value.idcard"> -->
      </div>
    </div>
     <div class="field">
      <label class="label">ชื่อ</label>
      <div class="control">
        <input type="text" class="input" v-model="value.firstname">
      </div>
    </div>
    <div class="field">
      <label class="label">นามสกุล</label>
      <div class="control">
        <input type="text" class="input" v-model="value.lastname">
      </div>
    </div>
   <div class="field">
      <label class="label">เบอร์โทรศัพท์</label>
      <div class="control">
        <input type="text" class="input phone" v-model="value.phone">
      </div>
    </div>
    <div class="field">
        <label class="label">เพศ</label>
        <div class="control">
            <div class="select is-fullwidth">
                <select v-model="value.sex">
                    <option value="ชาย">ชาย</option>
                    <option value="หญิง">หญิง</option>
                    <option value="อื่นๆ">อื่นๆ</option>
                </select>
            </div>
        </div>
    </div>
    <div class="field">
        <label class="label">ที่อยู่</label>
        <div class="control">
            <input type="text" class="input" v-model="value.address">
        </div>
    </div>
    <div class="field">
        <label class="label">ถนน</label>
        <div class="control">
            <input type="text" class="input" v-model="value.road">
        </div>
    </div>
    <div class="field">
        <label class="label">ซอย</label>
        <div class="control">
            <input type="text" class="input" v-model="value.soi">
        </div>
    </div>
    <div class="field">
        <label class="label">ตำบล</label>
        <div class="control">
            <input type="text" class="input" id="district" v-model="value.district">
        </div>
    </div>
    <div class="field">
        <label class="label">อำเภอ</label>
        <div class="control">
            <input type="text" class="input" id="amphoe" v-model="value.amphoe">
        </div>
    </div>
    <div class="field">
        <label class="label">จังหวัด</label>
        <div class="control">
            <input type="text" class="input" id="province" v-model="value.province">
        </div>
    </div>
    <div class="field">
        <label class="label">รหัสไปรษณีย์</label>
        <div class="control">
            <input type="text" class="input" id="zipcode" v-model="value.zipcode">
        </div>
    </div>
    <div class="field is-grouped is-grouped-centered">
        <div class="control">
            <button v-if="edit" class="button" @click="edit(value)">แก้ไข</button>
            <button v-if="cancel" class="button is-danger" @click="cancel">ลบ</button>
            <button v-if="apply" class="button" @click="apply(value)">ตกลง</button>
        </div>
    </div>

  </div>
</template>

<script>
// import Cleave Plugins
import Cleave from '@/node_modules/cleave.js/dist/cleave.min.js'
import CleaveRegion from '@/node_modules/cleave.js/dist/addons/cleave-phone.th'

// import jquery 
import $ from 'jquery'

export default {
    props: {
        edit: {type: Function},
        cancel: {type: Function},
        apply: {type: Function},
        value: {}
    },
    mounted() {
        // start Cleave
        new Cleave('.phone', {
            phone: true,
            phoneRegionCode: 'TH',
            onValueChanged: event => {
                Object.assign(this.value, {phone: event.target.value})
            }
        })

        new Cleave('.idcard', {
            delimiter: '-',
            blocks: [1, 4, 2, 3, 2, 3],
            onValueChanged: event => {
                Object.assign(this.value, {idcard: event.target.value})
            }
        })
        // end Cleave

        // start jquery.thailand
         $.Thailand({
           $district: $('#district'), // input ของตำบล
           $amphoe: $('#amphoe'), // input ของอำเภอ
           $province: $('#province'), // input ของจังหวัด
           $zipcode: $('#zipcode'), // input ของรหัสไปรษณีย์

           onDataFill: data => {
            // console.log(data)
            Object.assign(this.value, data)
           }
         })
        // end jquery.thailand
        
      },

      data() {
        return {
            // value: {}
        }
      },

      methods: {
      }
}
</script>

<style>

</style>
