<template>
  <div>
    <h1 class="title is-2">brand</h1>

      <pre>{{data}}</pre>
      <xx :options="xa"></xx>

      <hr>
      <p class="title">ข้อมูลรถ</p>
      <I v-model="data.car.brand" types="input" > ยี่ห้อ </I>
      <I v-model="data.car.version" types="input" > รุ่นรถ </I>
      <I v-model="data.car.cc" types="number"> ขนาดเครื่องยนต์</I>
      <I v-model="data.car.color"  types="input" > สีรถ</I>
      <I v-model="data.car.years" types="number"> ปีรถ</I>
      <hr>
      <p class="title">ข้อมูลเจ้าของรถ</p>
      <v-idcard v-model="data.customer.id" elementName="idCard"> เลขบัตรประจำตัวประชาชน</v-idcard>
      <I v-model="data.firstname" types="input"> ชื่อ</I>
      <I v-model="data.lastname" types="input"> นามสกุล</I>
        เพศ
      <v-radio v-model="data.customer.sex" :items="['ชาย', 'หญิง']"></v-radio>
      <v-phone v-model="data.customer.phone" elementName="tel"> เบอร์โทรศัพท์</v-phone>
      <hr>
      <p class="title">ข้อมูลวันหมดอายุ</p>
      <v-date v-model="data.capital.pragun" elementName="pragun"> วันหมดประกัน (วัน/เดือน/ปี พ.ศ.)</v-date>
      <v-date v-model="data.capital.pasee" elementName="pasee" > วันหมดภาษี (วัน/เดือน/ปี พ.ศ.)</v-date>
      <v-date v-model="data.capital.grommatun" elementName="grommatun" > วันหมดกรรมธรรม์(วัน/เดือน/ปี พ.ศ.)</v-date>

  </div>
</template>



<script>
  import I from '@/components/form/input.vue'
  import S from '@/components/form/select.vue'
  import Radio from '@/components/form/radio.vue'
  import PhoneComponent from '@/components/form/PhoneComponent.vue'
  import DateComponent from '@/components/form/DateComponent.vue'
  import IDCardComponent from '@/components/form/IDCardComponent.vue'
  import {fireDb} from '@/plugins/firebase.js'

  export default {
    components: {
      I,
      S,
      'v-radio': Radio,
      'v-phone': PhoneComponent,
      'v-date': DateComponent,
      'v-idcard': IDCardComponent
    },

    asyncData() {
      let dummy = []
      fireDb.collection('brand').get().then(query => {
        query.forEach(e => dummy.push(e.id))
      })
      return { 
        dummy: dummy,
        text: 'tezt',

        value: {
          version: []
        }
      }
    },

    data: () => {
      return {
        data: {
          customer: {},
          car: {},
          capital: {}
        }
      }
    },

    methods: {
      p: e => console.log(e)
    },

    computed: {}

  }

</script>

<style scoped>
  /* ul {
    display: flex;
    justify-content: center;
  }

  ul>li {
    padding: 8px 24px;
  } */

</style>
