<template>
<div class="grey lighten-5">
  <navigator />
  <div class="row" id="content">
  
    <div class="col s12 l5">
      <a-side />
    </div>

    <div class="col s12 l7">
      <nuxt/>
      <!-- <div class="card horizontal" v-for="(item, index) in 50" :key="index">
        <div class="card-image"></div>
        <div class="card-stacked">
          <div class="card-content">
            <h6>title</h6>
          </div>
          <div class="card-action">
            <a>action 1</a>
            <a>action 2</a>
          </div>
        </div>
      </div> -->
      <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo at eius, fugiat tempora deserunt, sunt perferendis
      voluptatem reprehenderit, quis rem dolores accusamus. Earum nostrum sequi, incidunt quis vel perspiciatis
      voluptatum! -->
    </div>
  </div>
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
