<template>
    <div>
        <ul>
            <label> <slot>label</slot> </label>
            <li v-for="(item, index) in items" :key="index" style="list-style: none" >
                {{item}} <input type="radio" v-model="inputValue" :value="item">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        value: {type: String},
        items: {type: Array}
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
