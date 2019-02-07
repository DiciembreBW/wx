<template>
    <div>
        <h1 class="title">สรุป</h1>
        {{$store.state.value}}
        <button class="button" @click="back">ย้อนกลับ</button>
        <button class="button" @click="save">บันทึก</button>
    </div>
</template>

<script>
import testFirestore from '@/plugins/boydPlugins'

let customer = new testFirestore('customer')
export default {
    props: {back: {}},
    data () {
        return {}
    },
    methods: {
        save: function () {
            customer.addDocument(this.$store.state.value)
            this.$router.push('/')
        }
    },
}
</script>

<style>

</style>
