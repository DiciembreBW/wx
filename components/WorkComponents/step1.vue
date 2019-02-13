<template>
  <div>
    <h1 class="title">เลือกลูกค้า</h1>
    <!-- <vue-multiselect v-model="value" :options="customers" label="firstname" placeholder="เลือกลูกค้า" />
        <br>
        <div class="field" v-for="(item, index) in Object.keys(value)" :key="index">
            <div class="control">
                <input type="text" v-model="value[item]" class="input">
            </div>
        </div> -->
        
    <div class="field" v-for="(item, index) in fields" :key="index">
      <input-component v-model="value[item.name]" :Cleave="item" />
    </div>

    <button class="button is-link is-fullwidth" @click="next">ถัดไป</button>

    <pre> {{value}} </pre>

  </div>
</template>

<script>
import testFirebase from '@/plugins/boydPlugins'
import InputComponent from '@/components/InputComponent'

let customer = new testFirebase('customers')

export default {
  components: {
    InputComponent
  },
  props: {
    next: {},
    back: {}
  },

  data() {
    return {
      value: {},
      customers: customer.data,
      fields: [
          {name: 'firstname', desc: 'ชื่อ'},
          {name: 'lastname', desc: 'นามสกุล'},
          {name: 'sex', desc: 'เพศ', select: [ 'ชาย', 'หญิง']},
          {name: 'phone', desc: 'เบอร์โทรศัพท์', config: {phone: true, phoneRegionCode: 'TH'}},
          {name: 'idcard', desc: 'เลขบัตรประจำตัวประชาชน', config: {delimiter: '-', blocks: [1, 4, 2 ,3, 2, 1]}}
      ]
    }
  }
}
</script>

<style>

</style>
