<template>
  <div>
    <pre> {{value}} </pre>
      <vue-multiselect v-model="customerSelected" :options="getCustomerFromFirestore" label="firstname">xxx</vue-multiselect>
    <hr>
    <div class="columns">
      <div class="column class">
        <h1 class="title is-4">ข้อมูลรถ</h1>
          <car-component @input="(event) => {mergeDataToValue(event)}"/>
          <cleave-component v-model="value.years" :config="{blocks: [4]}" elementName="car-year">ปี (พ.ศ.)</cleave-component>
          <select-component v-model="value.color" :data="Car.color">สีรถ</select-component>
          <input-component v-model="value.cc" >ขนาดเครื่องยนต์</input-component>
          <!-- <pre> {{value}} </pre> -->
      </div>
      
      <div class="column class">
        <h1 class="title is-4">ข้อมูลลูกค้า</h1>
        <!-- <pre>{{customerSelected}}</pre> -->
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
          <!-- <input-component v-model="value.fistname" :v="customerSelected.fistname">ชื่อ</input-component>
          <input-component v-model="value.lastname">นามสกุล</input-component>
          <select-component v-model="value.sex" :data="customer.sex">เพศ</select-component>
          <input-component v-model="value.address">ที่อยู่</input-component>
          <cleave-component v-model="value.idcard" :config="Cleave.idCardFormat" elementName="id-card">เลขบัตรประจำตัวประชาชน</cleave-component> -->
          <!-- <pre> {{value.customer}} </pre> -->
      </div>
      
      <div class="column class">
        <h1 class="title is-4">ข้อมูลเอกสารต่างๆ</h1>
          <cleave-component v-model="value.pragun" :config="Cleave.dateFormat" elementName="x1">วันหมดประกัน (วัน/เดือน/ปี พ.ศ.)</cleave-component>
          <cleave-component v-model="value.pasee" :config="Cleave.dateFormat" elementName="x2">วันหมดภาษี (วัน/เดือน/ปี พ.ศ.)</cleave-component>
          <cleave-component v-model="value.grommatun" :config="Cleave.dateFormat" elementName="x3">วันหมดกรรมธรรม์(วัน/เดือน/ปี พ.ศ.)</cleave-component>
          <!-- <pre> {{value.info}} </pre> -->
      </div>
    </div>
    <div class="row"> <button class="button is-info" @click="apply">บันทึก</button></div>
    <!-- <h1 class="title is-2">หน้าแรก</h1> -->
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

//firestore
import {Firestore} from '@/plugins/boydPlugins'

export default {
  mounted () {
    Firestore.get({
      databaseName: 'customers'
    }).then(data => {
      this.getCustomerFromFirestore = data
    })
  },
  
  data: function () {
    return {
      ...InitialData,
      value: {},
      itemsData: [],

      getCustomerFromFirestore: [],
      customerSelected: ''
    }
  },

  watch: {
    customerSelected: function (v) {
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
      let value = this.value
      fireDb.collection('cars').add({
        ...this.value
      })
      .then(docRef => {
        console.log('doc ref', docRef)
        this.$router.push('/')
      })
      .catch(err => {
        console.log(err)
      })
    },

    mergeDataToValue: function (value) {
      this.value = { ...this.value, ...value}
    }
  },

  computed: {
    itemsComp: function () {

    }
  }
}
</script>

<style scoped>
.button {
  width: 100%;
}
</style>
