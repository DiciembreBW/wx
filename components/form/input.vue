<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label"> <slot>label</slot> </label>
    </div>

    <div class="field-body">
      <p class="control">
        <input type="text" class="input" v-model="text">

        <!-- <span class="icon is-small is-right" v-if="text" @click="clear">
          <i class="fas fa-check">x</i>
        </span> -->
      </p>
    </div>
    
    <!-- pass direct -->
    <!-- <input type="text" @input="$emit('input', $event.target.value)"> -->

    <!-- pass watch -->

    
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
  /* div {
    padding: 24px 0;
  }

  div>input {
    border-radius: 21px;
    border: 1px solid gray;
    padding: 4px 12px;
  } */

</style>
