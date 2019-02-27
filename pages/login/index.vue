<template>
    <div class="wrap">
        <!-- <button class="button"> เข้าสู่ระบบ </button> -->
        <!-- <span class="button is-primary" @click="login">
            เข้าสู่ระบบ
        </span> -->
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods: {
        login: function () {
            this.$auth.loginWith('google')
        }
    }

}
</script>

<style lang="scss" scoped>
.wrap {
    // background-color: red;
    padding: 120px 0;
    // border: 1px solid grey;
    // box-shadow: 
    text-align: center;
    p {
        text-align: center;
    }
}

</style>
