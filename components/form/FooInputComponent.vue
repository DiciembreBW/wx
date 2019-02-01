<template>
    <div class="field">
        <label class="label is-size-7"> <slot>label</slot> </label>
        <div class="control">
            <input type="text" class="input" :value="value" disabled>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {type: String}
    },

    data () {
        return {}
    }
}
</script>

<style>

</style>
