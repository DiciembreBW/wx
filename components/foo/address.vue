<template>
    <div>
        <!-- <h1>{{data.firstname}} {{data.lastname}} </h1>
        <p> รหัสบัตรประชาชน {{data.idcard}} เบอร์โทรศัพท์ {{data.phone}} </p> -->
        <h5> ที่อยู่ </h5>
        <ul>
            <li> ต.{{data.district}} </li>
            <li> อ.{{data.amphoe}} </li>
            <li> จ.{{data.province}} </li>
            <li> รหัสไปรษณีย์ {{data.zipcode}} </li>
        </ul>
    </div>
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
