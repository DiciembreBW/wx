<template>
    <div class="field">
        <label class="label is-size-7">
            <slot class="">slot</slot>
        </label>
        <div class="control">
            <input v-model="inputValue" class="input" type="text">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // 1
        data: {type: String},
        v: {type: String}
    },

    data: function () {
        return {
            // 2
            inputValue: this.data
        }
    },

    watch: {
        // 3
        inputValue (value) {
            this.$emit('input', value)
        }
    }
}
</script>
