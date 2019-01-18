<template>
  <div>
    <h1 class="title is-2">brand</h1>

      <pre>{{data}}</pre>

      <hr>

      <I v-model="data.car.brand" types="input" > ยี่ห้อ </I>
      <I v-model="data.car.version" types="input" > รุ่นรถ </I>
      <I v-model="data.car.cc" types="number"> ขนาดเครื่องยนต์</I>
      <I v-model="data.car.color"  types="input" > สีรถ</I>
      <I v-model="data.car.years" types="number"> ปีรถ</I>
      <hr>
      <I v-model="data.customer.id" types="number"> เลขบัตรประจำตัวประชาชน</I>
      <I v-model="data.firstname" types="input"> ชื่อ</I>
      <I v-model="data.lastname" types="input"> นามสกุล</I>
        เพศ
        <v-radio v-model="data.customer.sex" :items="['ชาย', 'หญืง']"h></v-radio>
      <I v-model="data.number_phone" types="number"> เบอร์โทรศัพท์</I>
      <hr>
      <I v-model="data.capital.pragun" types="input" > วันหมดประกัน</I>
      <I v-model="data.capital.pasee" types="input"> วันหมดภาษี</I>
      <I v-model="data.capital.grommatun" types="input"> วันหมดกรรมธรรม์</I>

  </div>
</template>



<script>
  import I from '@/components/form/input.vue'
  import S from '@/components/form/select.vue'
  import Radio from '@/components/form/radio.vue'
  import {fireDb} from '@/plugins/firebase.js'

  export default {
    components: {
      I,
      S,
      'v-radio': Radio
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
