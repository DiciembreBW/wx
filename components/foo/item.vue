<template>
        <span>
            <i class="material-icons" :class="sty">{{icon}}</i>
            {{text}}
        </span>
</template>

<script>
export default {
    props: {
        text: { },
        icon: {},
        sty: {}
    }
}
</script>

<style scoped>
span {
    padding: 0 8px;
}
.material-icons {
    display: inline-flex;
    vertical-align: top;
}
</style>
