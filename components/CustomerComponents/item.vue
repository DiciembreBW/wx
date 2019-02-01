<template>
    <div>
        <div class="wrapper" v-if="data">
            <h1 class="title"> ชิ่อ {{data.fistname}} นามสกุล {{data.lastname}} </h1>
            <h2 class="subtitle"> เบอร์โทรศัพท์ {{data.phone}} เพศ {{data.sex}} รหัสบัตรประจำตัวประชาชน {{data.idcard}} </h2>
            <p>
                เลขที่{{data.address}}
                หมู่{{data.moo}}
                ตำบล{{data.subdistrict}}
                อำเภอ{{data.district}}
                จังหวัด{{data.province}}
                รหัสไปรษณีย์{{data.postcode}}
            </p>
        </div>
        <a @click="remove">ลบ</a>
    </div>
</template>

<script>
import {Firestore} from '@/plugins/boydPlugins'

export default {
    props: {
        data: {type: Object} 
    },
    
    data () {
        return {}
    },

    methods: {
        remove: function () {
            Firestore.removeDoc({
                databaseName: 'customers',
                id: this.data._key
            })
        }
    }
}
</script>
