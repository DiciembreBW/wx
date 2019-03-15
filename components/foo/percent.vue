<template>
    <div>
        <div class="wrap">
            <h1>{{percent}}</h1>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object
        }
    },

    computed: {
        percent: function () {
        }
    },

    data () {
        return {}
    }
}
</script>

<style scoped>
.wrap {
    height: 100%;
}
</style>
