<template>
  <div class="container">
    <input type="text"
      v-validate="data.validate"
      :name="data.name"

      @keyup="($event) => $emit('input',$event.target.value)"
     />

     <span> {{errors.first(data.name)}} </span>
  </div>
</template>

<script>
export default {
  props: {
    data: {type: Object}
  }
}
</script>

<style>

</style>
