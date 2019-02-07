<template>
    <div>
        <h1 class="title">1</h1>
        <div class="field" v-for="(item, index) in fields" :key="index" >
            <cleave-component v-model="value[item.name]" :Cleave="item" />
        </div>
    </div>
</template>

<script>
import CleaveComponent from '@/components/CleaveComponent2'
import $ from 'jquery'


export default {
    mounted () {
        if(process.BROWSER_BUILD) {
            console.log($(this))
        }
        $('.title').html('pass')
    },

    components: {
        CleaveComponent
      },
      data() {
        return {
          value: {},
          fields: [
              { name: 'firstname', desc: 'ชื่อ', icon: 'fa-user' },
              { name: 'lastname', desc: 'นามสกุล', icon: 'fa-user' },
              { name: 'sex', desc: 'เพศ', icon: 'fa-adjust', select: [{name: 'men', desc: 'ชาย'},{name: 'femele', desc: 'หญิง'}] },
              { name: 'phone', desc: 'เบอร์โทรศัพท์', icon: 'fa-phone' , config: {phone: true, phoneRegionCode: 'TH'}},
              { name: 'idcard', desc: 'เลขบัตรประจำตัวประชาชน', icon: 'fa-id-card' , config: {delimiter: "-", blocks: [1, 4, 5, 2, 1]}},
          ],
          data: []
        }
      }
    }
</script>


<style>

</style>
