<template>
  <div>
    <div class="columns">
      <div class="column class">
        <h1 class="title is-4">ข้อมูลรถ</h1>
          <!-- <select-component :data="CarData"></select-component> -->
          <car-component v-model="data.car"/>
          <input-component>ปี (พ.ศ.)</input-component>
          <input-component>สีรถ</input-component>
          <input-component>ขนาดเครื่องยนต์</input-component>
          <pre> {{data}} </pre>
      </div>
      
      <div class="column class">
        <h1 class="title is-4">ข้อมูลลูกค้า</h1>
          <input-component>ชื่อ</input-component>
          <input-component>นามสกุล</input-component>
          <select-component :data="customer.sex">เพศ</select-component>
          <input-component>ที่อยู่</input-component>
          <cleave-component :config="Cleave.idCardFormat" elementName="id-card">เลขบัตรประจำตัวประชาชน</cleave-component>
      </div>
      
      <div class="column class">
        <h1 class="title is-4">ข้อมูลเอกสารต่างๆ</h1>
          <cleave-component :config="Cleave.dateFormat" elementName="x1">วันหมดประกัน (วัน/เดือน/ปี พ.ศ.)</cleave-component>
          <cleave-component :config="Cleave.dateFormat" elementName="x2">วันหมดภาษี (วัน/เดือน/ปี พ.ศ.)</cleave-component>
          <cleave-component :config="Cleave.dateFormat" elementName="x3">วันหมดกรรมธรรม์(วัน/เดือน/ปี พ.ศ.)</cleave-component>

      </div>
    </div>
    <div class="row"> <button class="button is-submit">บันทึก</button></div>
    <!-- <h1 class="title is-2">หน้าแรก</h1> -->
  </div>
</template>

<script>
// import components
import InputComponent from '@/components/form/InputComponent'
import SelectComponent from '@/components/form/SelectComponent'
import CleaveComponent from '@/components/form/CleaveComponent'
import CarComponent from '@/components/CarComponent'

// data
import InitialData from '@/static/initialData.json'
import CarData from '@/static/car-list.json'

export default {
  data: function () {
    return {
      ...InitialData,
      data: {}
    }
  },

  components: {
    InputComponent,
    SelectComponent,
    CleaveComponent,
    CarComponent
  }
}
</script>

<style>
</style>
