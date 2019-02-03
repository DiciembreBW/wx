<template>
  <div>

    <Navigator />

    <item-navigator />

    <nuxt/>

    <Footer />

    <!-- <section class="hero is-medium is-light is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Primary bold title
          </h1>
          <h2 class="subtitle">
            Primary bold subtitle
          </h2>
        </div>
      </div>
  </section>
    <hr>
    <section class="section">
      <div class="columns">

        <div class="column is-one-quarter">
        </div>

        <div class="column">

        </div>
      </div>
    </section> -->

  </div>
</template>

<script>
  import ItemNavigator from '@/components/html/ItemNavigator.vue'
  import Footer from '@/components/html/Footer.vue'
  import Navigator from '@/components/html/Navigator.vue'

  export default {
    components: {
      ItemNavigator,
      Footer,
      Navigator
    }
  }
</script>
