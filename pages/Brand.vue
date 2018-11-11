<template>
  <div>
    <h1 class="title is-2">{{test}}</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, sunt dolore rem quidem ut corporis inventore
      sint, accusantium quia aliquid amet tempore hic quae officiis rerum perferendis magni architecto! Necessitatibus!</p>
    <!-- <ul>
      <li v-for="(item, index) in dumb" :key="index">
        {{item.name}}
      </li>
    </ul> -->
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        test: 'Brand...'
      }
    }
  }

</script>
