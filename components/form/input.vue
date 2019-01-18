<template>
  <div>
    <label> <slot>label</slot> </label>
    <!-- <input type="text" class="input" @keyup.enter="$emit('pass', $event.target.value)"> -->
    <input type="text" class="input" v-model="inputValue" v-if="types=='input'"/>
    <input type="number" class="input" v-model="inputValue" v-if="types=='number'"/>
    <!-- <input type="text" class="input" v-model="inputValue" />
    <input type="text" class="input" v-model="inputValue" />
    <input type="text" class="input" v-model="inputValue" />
    <input type="text" class="input" v-model="inputValue" /> -->
  </div>
</template>

<script>
// how to 
// https://stackoverflow.com/questions/47311936/v-model-and-child-components
  export default {
    props: {
      value: { type: String },
      types: { type: String }
    },
    data() {
      return {
        inputValue: this.value
      }
    },

    methods: {
    },

    watch: {
      inputValue (value) {
        this.$emit('input', value)
      }
    }

  }

</script>

<style scoped>
</style>
