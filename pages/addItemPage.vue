<template>
  <div>
    <vue-multiselect v-model="customerSelected" :options="getCustomerFromFirestore" label="firstname" placeholder="เลือกลูกค้า">xxx</vue-multiselect>
    <hr>
    <div class="columns">
      
      <div class="column class">
        <h1 class="title is-4">ข้อมูลลูกค้า</h1>
        <foo-input-component :value="value.firstname">ชิ่อ</foo-input-component>
        <foo-input-component :value="value.lastname">นามสกุล</foo-input-component>
        <foo-input-component :value="value.idcard">รหัสบัตรประจำตัวประชาชน</foo-input-component>
        <foo-input-component :value="value.phone">เบอร์โทรศัพท์</foo-input-component>
        <foo-input-component :value="value.sex">เพศ</foo-input-component>
        <foo-input-component :value="value.address">เลขที่</foo-input-component>
        <foo-input-component :value="value.moo">หมู่</foo-input-component>
        <foo-input-component :value="value.subdistrict">ตำบล</foo-input-component>
        <foo-input-component :value="value.district">อำเภอ</foo-input-component>
        <foo-input-component :value="value.province">จังหวัด</foo-input-component>
        <foo-input-component :value="value.postcode">รหัสไปรษณีย์</foo-input-component>
      </div>

      <div class="column class">
        <h1 class="title is-4">ข้อมูลรถ</h1>
          <!-- brand -->
          <div class="field">
            <label class="label is-size-7">ยี่ห้อรถ</label>
            <div class="select  is-fullwidth">
              <select v-model="value.brand">
                <option v-for="(item, index) in cars" :key="index" :value="item._key">{{item._key}}</option>
              </select>
            </div>
          </div>

          <!-- version -->
          <div class="field">
            <label class="label is-size-7">รุ่นรถ</label>
            <div class="select  is-fullwidth">
              <select v-model="value.version">
                <option v-for="(item, index) in version" :key="index" :value="item">{{item}}</option>
              </select>
            </div>
          </div>


          <!-- <car-component @input="(event) => {mergeDataToValue(event)}"/> -->
          <cleave-component v-model="value.years" :config="{blocks: [4]}" elementName="car-year">ปี (พ.ศ.)</cleave-component>
          <select-component v-model="value.color" :data="colors">สีรถ</select-component>
          <select-component v-model="value.insuranceType" :data="corps">พ.ร.บ.</select-component>

          <!-- prb-->
          <div class="field">
            <label class="label is-size-7">ประเภทประกัน</label>
            <div class="select  is-fullwidth">
              <select v-model="value.insuranceUnit">
                <option v-for="(item, index) in insuranceUnit" :key="index" :value="item">{{item}}</option>
              </select>
            </div>
          </div>

          <select-component v-model="value.insuranceCorp" :data="corps">บริษัทประกัน</select-component>
          <input-component v-model="value.cc" >ขนาดเครื่องยนต์</input-component>
          <input-component v-model="value.plate" >ทะเบียนรถ</input-component>
      </div>
      
      <div class="column class">
        <h1 class="title is-4">ข้อมูลเอกสารต่างๆ</h1>
          <cleave-component v-model="value.pragun" :config="Cleave.dateFormat" elementName="x1">วันหมดประกัน (วัน/เดือน/ปี พ.ศ.)</cleave-component>
          <cleave-component v-model="value.pasee" :config="Cleave.dateFormat" elementName="x2">วันหมดภาษี (วัน/เดือน/ปี พ.ศ.)</cleave-component>
          <cleave-component v-model="value.grommatun" :config="Cleave.dateFormat" elementName="x3">วันหมด พ.ร.บ.(วัน/เดือน/ปี พ.ศ.)</cleave-component>
          <input-component v-model="value.tun" >ทุนประกัน</input-component>
      </div>
    </div>
    <div class="row"> <button class="button is-info" @click="apply">บันทึก</button></div>
  </div>
</template>

<script>
// import components
import InputComponent from '@/components/form/InputComponent'
import SelectComponent from '@/components/form/SelectComponent'
import CleaveComponent from '@/components/form/CleaveComponent'
import CarComponent from '@/components/CarComponent'
import FooInputComponent from '@/components/form/FooInputComponent'

// data
import InitialData from '@/static/initialData.json'
import CarData from '@/static/car-list.json'
import dataOld from '@/static/dataOld.json'
import _ from 'lodash'

//firestore
import testFirestore, {Firestore} from '@/plugins/boydPlugins'

let CAR = new testFirestore('car')
let CARS = new testFirestore('cars')
let CUSTOMER = new testFirestore('customers')
let COLOR = new testFirestore('colors')
let PRB = new testFirestore('prbs')
let CORPS = new testFirestore('corps')

export default {

  data: function () {
    return {
      ...InitialData,
      value: {
        firstname: '-',
        lastname: '-',
        idcard: '-',
        phone: '-',
        sex: '-',
        address: '-',
        moo: '-',
        subdistrict: '-',
        district: '-',
        province: '-',
        postcode: '-',
        brand: '-',
        version: '-',
        year: '-',
        color: '-',
        insuranceType: '-',
        insuranceUnit: '-',
        insuranceCorp: '-',
        cc: '-',
        plate: '-',
        pragun: '-',
        pasee: '-',
        grommatun: '-',
        tun: '-'
      },
      itemsData: [],

      getCustomerFromFirestore: CUSTOMER.data,
      customerSelected: '',
      cars: CAR.data,
      colors: COLOR.data,
      prbs: PRB.data,
      corps: CORPS.data
    }
  },

  watch: {
    customerSelected: function (v) {
      delete v._key
      this.value = {...v}
    }
  },

  components: {
    InputComponent,
    SelectComponent,
    CleaveComponent,
    CarComponent,
    FooInputComponent
  },

  methods: {
    apply: function () {
      // Firestore.add({
      //   databaseName: 'cars',
      //   value: this.value
      // })
      CARS.addDocument(this.value)
      this.$router.push('/')
    },

    mergeDataToValue: function (value) {
      this.value = { ...this.value, ...value}
    }
  },

  computed: {
    itemsComp: function () {

    },

    version: function () {
      let data = []
      _.map(this.cars, item => {
        if (item._key == this.value.brand) {
          data = item.options
        }
      })
      return data
    }
  }
}
</script>

<style scoped>
.button {
  width: 100%;
}
</style>
