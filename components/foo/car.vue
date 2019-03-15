<template>
    <div>
        <h5>ข้อมูลรถ</h5>
        <ul>
            <li> ยี่ห้อ {{data.brand}} </li>
            <li> รุ่น {{data.version}} </li>
            <li> สี {{data.color}} </li>
            <li> ปี {{data.year}} </li>
            <li> ขนาดเครื่องยนต์ {{data.cc}} ซีซ๊ </li>
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
