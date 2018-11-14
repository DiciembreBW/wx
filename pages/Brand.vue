<template>
  <div>
    <h1 class="title is-2">{{config.title}}</h1>

    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, sunt dolore rem quidem ut corporis inventore
      sint, accusantium quia aliquid amet tempore hic quae officiis rerum perferendis magni architecto! Necessitatibus!</p>

    <v-input v-model="user.name"> name </v-input>
    <v-input v-model="user.lastname"> lastname </v-input>
    <v-input v-model="user.email"> email </v-input>

    <hr>
    <pre> {{user}} </pre>
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
    }

  }

</script>
