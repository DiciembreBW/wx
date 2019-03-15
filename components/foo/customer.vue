<template>
    <div>
        <!-- <pre> {{data}} </pre> -->
        <h1>{{data.firstname}} {{data.lastname}} </h1>
        <p> รหัสบัตรประชาชน {{data.idcard}} เบอร์โทรศัพท์ {{data.phone}} </p>
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
