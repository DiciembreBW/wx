<template>
<div class="grey lighten-5">
  <navigator />
  <nuxt/>
  <!-- <div class="row" id="content">
    <div class="col s12 l5">
      <a-side />
    </div>

    <div class="col s12 l7">
      <nuxt/>
    </div>
  </div> -->
</div>
</template>

<style lang="scss" scoped>
$color_b: hsl(30, 30, 30);
#a-side {
  background-color: $color_b;
}
</style>


<script>
  import Navigator from '@/components/html/Navigator.vue'

  export default {
    components: {
      Navigator
    }
  }
</script>
