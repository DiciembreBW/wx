<template>
    <div>
        <!-- user vue-multiselect library -->
        <label> <slot>label</slot> </label>
        <vue-multiselect v-model="inputValue" :options="data"></vue-multiselect>
    </div>
</template>

<script>
export default {
    props: {
        data: {type: Array, required: true},
        value: {type: String}
    },

    data () {
        return { 
            inputValue: this.value
        }
    },

    watch: {
        inputValue (value) {
            this.$emit('input', value)
        }
    }
}
</script>
