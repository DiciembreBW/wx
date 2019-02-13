<template>
    <div>
        <h1 class="title"> step 2 </h1>
        <div class="field" v-for="(item, index) in fields" :key="index">
            <cleave-component :Cleave="item" />
        </div>
        <div class="field">
            <button class="button" @click="back">ย้อนกลับ</button>
            <button class="button" @click="next">ถัดไป</button>
        </div>
    </div>
</template>

<script>
import CleaveComponent from '@/components/CleaveComponent2'
import testFirebase from '@/plugins/boydPlugins'
const Color = new testFirebase('colors')

export default {
    components: {CleaveComponent},
    props: {
        next: {},
        back: {}
    },
    data () {
    
        return {
            fields: [
                {name: 'aa', select: Color.data},
                {name: 'year', desc: 'ปีรถ'},
                {name: 'cc', desc: 'ขนาดเครื่องยนต์'},
                {name: 'plate', desc: 'ทะเบียนรถ'},
            ]
        }
    }
}
</script>

<style>

</style>
