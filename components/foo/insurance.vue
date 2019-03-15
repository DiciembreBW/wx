<template lang="pug">
    div
        h5 ข้อมูลประกัน
        ol
            li พ.ร.บ. {{data.prb}}
            li เบี้ย {{data.bia}}
            li บริษัทประกัน {{data.corp}}
            li ซ่อม {{data.fix}}
            li ต่อภาษี {{data.joinPasee}}
            li หมายเหตุ {{data.note}}
            li วันเริ่มประกัน {{data.pragunStart}} 
            li วันหมดกรมธรรม์ {{data.pragunEnd}} 
            li วันหมดภาษี {{data.paseeExpire}} 
            li ทุนประกัน {{data.pragunTun}} 
            li ประเภทประกัน {{data.pragunType}} 
</template>

<script>
export default {
    props: {
        data: {type: Object, required: true}
    }
}
</script>

<style>

</style>
