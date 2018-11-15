<template>
  <div>
    <h1 class="title is-2">{{config.title}}</h1>

    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, sunt dolore rem quidem ut corporis inventore
      sint, accusantium quia aliquid amet tempore hic quae officiis rerum perferendis magni architecto! Necessitatibus!</p>

    <ul>
      <li>
        <nuxt-link to="/manage/AddBrand">เพิ่ม</nuxt-link>
      </li>
    </ul>

    <button @click="complete">submit</button>

  </div>
</template>



<script>
  import Input from '@/components/form/input.vue'

  export default {
    components: {
      'v-input': Input
    },

    data: () => {
      return {
        config: {
          title: 'Brand Page...'
        },
        user: {}
      }
    },

    methods: {
      complete: function () {}
    },

    computed: {}

  }

</script>

<style scoped>
  ul {
    display: flex;
    justify-content: center;
  }

  ul>li {
    padding: 8px 24px;
  }

</style>
