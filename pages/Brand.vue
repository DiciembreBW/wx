<template>
  <div>
    <h1 class="title is-2">brand</h1>
      <pre> {{data.car}} </pre>
      <p class="title">ข้อมูลรถ</p>
      <v-multiselct v-model="data.car.brand" :data="carBrand"> ยี่ห้อ </v-multiselct>
      <v-multiselct v-model="data.car.version" :data="versionComp"> รุ่นรถ  </v-multiselct>
      <I v-model="data.car.cc" types="number"> ขนาดเครื่องยนต์</I>
      <v-multiselct v-model="data.car.color" :data="['แดง', 'เหลือง', 'น้ำเงิน', 'ดำ']"> สีรถ</v-multiselct>
      <I v-model="data.car.years" types="number"> ปีรถ (พ.ศ.)</I>
      <hr>

      <p class="title">ข้อมูลเจ้าของรถ</p>
      <v-idcard v-model="data.customer.id" elementName="idCard"> เลขบัตรประจำตัวประชาชน</v-idcard>
      <I v-model="data.customer.firstname" types="input"> ชื่อ</I>
      <I v-model="data.customer.lastname" types="input"> นามสกุล</I>
      <v-radio v-model="data.customer.sex" :items="['ชาย', 'หญิง']">เพศ</v-radio>
      <v-phone v-model="data.customer.phone" elementName="tel"> เบอร์โทรศัพท์</v-phone>
      <I v-model="data.customer.address" types="input">ที่อยู่</I>
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
  import SelectComponent from '@/components/form/SelectComponent.vue'

  import carlist from '@/static/car-list.json'

  import {a} from '@/plugins/boydPlugins'
  import _ from 'lodash'


  export default {
    components: {
      I,
      S,
      'v-radio': Radio,
      'v-phone': PhoneComponent,
      'v-date': DateComponent,
      'v-idcard': IDCardComponent,
      'v-multiselct': SelectComponent
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

    watch: {},

    methods: {
    },

    computed: {
      carBrand: function () {
        return a.$_arr(carlist, 'brand')
      },

      versionComp: function () {
        let version = []
        let {car} = this.data

        let selected = car.brand
        // let brands = _.map(carlist, 'brand')
        _.map(carlist, item => {
          if (item.brand === selected) {
            // version.push(item)
            version = item.models
          }
        })
        return version
      }
    }

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
