<template>
    <button
        class="waves-effect waves-light btn"
        :class="sty"
        @click="()=> onClick()"
    >
    <slot>Button</slot>
    </button>
</template>

<script>
export default {
    props: {
        sty: {
            type: String
        },
        onClick: {
            type: Function
        }
    }
}
</script>

<style>

</style>
