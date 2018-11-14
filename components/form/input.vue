<template>
  <div>
    <label>
      <slot>Label Input</slot>
    </label>
    <!-- pass direct -->
    <!-- <input type="text" @input="$emit('input', $event.target.value)"> -->

    <!-- pass watch -->
    <input type="text" v-model="text">

    <button @click="clear" v-if="text">x</button>
    
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        text: ''
      }
    },

    methods: {
      // methods
    //   clear value
        clear: function () {
            this.text = ''
        }
    },

    watch: {
      // watch
      text: function (value) {
        this.$emit('input', value)
      }
    }

  }

</script>

<style scoped>
  div {
    padding: 24px 0;
  }

  div>input {
    border-radius: 21px;
    border: 1px solid gray;
    padding: 4px 12px;
  }

</style>
