<template>
  <div class="container">
    <Header />
    <Content />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Header from '~/components/html/header.vue'
import Content from '~/components/html/Content.vue'

export default {
  components: {
    // Logo
    Header, Content
  }
}
</script>

<style>

.container {
  background-color: azure;
  /* padding: 0 24px; */
}

</style>
