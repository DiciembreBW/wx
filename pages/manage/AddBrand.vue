<template>
  <div>
    <h1>เพิ่ม</h1>
    <v-input v-model="data.name">name</v-input>
    <v-input v-model="data.version">version</v-input>
  </div>
</template>

<script>
  // import components
  import Input from '@/components/form/input'

  export default {
    components: {
      'v-input': Input
    },
    data: () => {
      return {
        data: {
          brand: []
        },
      }
    },

    methods: {
    }
    
  }

</script>
