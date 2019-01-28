<template>
  <div>
        <!-- <car-component v-model="value.carbrand"/>
        <cleave-component v-model="value.car.years" :config="{blocks: [4]}" elementName="car-year">ปี (พ.ศ.)</cleave-component>
        <select-component v-model="value.car.color" :data="Car.color">สีรถ</select-component>
        <input-component v-model="value.car.cc" >ขนาดเครื่องยนต์</input-component> -->
    <div class="row"> <button class="button is-info" @click="apply">บันทึก</button></div>

    <hr> 
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

//firestore
import {db} from '@/plugins/Firestore'

export default {
  
  data: function () {
    return {}
  },

  components: {
    InputComponent,
    SelectComponent,
    CleaveComponent,
    CarComponent
  },

  methods: {
  },

  computed: {
  }
}
</script>
