<template>
  <div>
    <navigator/>

    <!-- main -->
    <div class="columns">
      <!-- Left Side -->
      <div class="column is-one-quarter" id="a-side">
        <a-side  v-if="$auth.loggedIn" />
      </div>
      <!-- Right Side -->
      <div class="column">
        <!-- <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda magnam, exercitationem cum perspiciatis a molestias nemo vitae ipsa. Maiores illum quaerat voluptatem, laboriosam distinctio animi mollitia itaque sunt illo? </p> -->
        <nuxt/>
      </div>
    </div>
    <!-- end main -->
    <!-- <Footer /> -->
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
  import ASide from './aside.vue'

  export default {
    components: {
      Navigator,
      ASide
    }
  }
</script>
