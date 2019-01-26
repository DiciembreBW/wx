<template>
    <div class="field">
        <label class="label is-size-7">
            <slot>label</slot>
        </label>
        <div class="control">
            <div class="select" >
                <select v-model="inputValue">
                    <option v-for="(item, index) in data" :key="index" :value="item"> {{item}} </option>
                </select>
            </div>
        </div>
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
