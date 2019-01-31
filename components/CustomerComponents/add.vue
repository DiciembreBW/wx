<template>
  <div>
    <div class="columns">
      <div class="column class">
          <cleave-component v-model="value.idcard" :config="Cleave.idCardFormat" elementName="id-card">เลขบัตรประจำตัวประชาชน</cleave-component>
          <input-component v-model="value.fistname">ชื่อ</input-component>
          <input-component v-model="value.lastname">นามสกุล</input-component>
          <select-component v-model="value.sex" :data="customer.sex">เพศ</select-component>
          <phone-component elementName="tel" v-model="value.phone">เบอร์โทรศัพท์</phone-component>
      </div>

      <div class="column class">
          <input-component v-model="value.address">ที่อยู่</input-component>
          <input-component v-model="value.moo">หมู่</input-component>
          <input-component v-model="value.subdistrict">ตำบล</input-component>
          <input-component v-model="value.district">อำเภอ</input-component>
          <input-component v-model="value.province">จังหวัด</input-component>
          <input-component v-model="value.postcode">รหัสไปรษณีย์</input-component>
      </div>
    </div>

    <pre> {{value}} </pre>
    
    <div class="row"> <button class="button is-info" @click="save">บันทึก</button></div>

  </div>
</template>

<script>
// import components
import InputComponent from '@/components/form/InputComponent'
import SelectComponent from '@/components/form/SelectComponent'
import CleaveComponent from '@/components/form/CleaveComponent'
import PhoneComponent from '@/components/form/PhoneComponent'

// component layout
import get from '@/components/CustomerComponents/get'

// data
import InitialData from '@/static/initialData.json'

// plugin
import {Firestore} from '@/plugins/boydPlugins'

export default {
  
  data: function () {
    return {
      ...InitialData,
      value: {},
      componentId: get
    }
  },

  components: {
    InputComponent,
    SelectComponent,
    CleaveComponent,
    PhoneComponent
  },

  methods: {
      save: function () {
          Firestore.add({
              databaseName: 'customers',
              value: this.value
          })
        this.$emit('handleComponent',{
            component: get
        })
      },

      addComponent: function () {
        // this.componentId = add
      },
      getComponent: function () {
        // this.componentId = get
      }
  },

  computed: {
   
  }
}
</script>

<style scoped>
.button {
  width: 100%;
}
</style>
