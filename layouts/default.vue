<template>
  <div class="container">
    <Header />

    <section class="section">
      <div class="columns">

        <!-- left -->
        <div class="column is-one-quarter">
            <Navigator />
        </div>

        <!-- right -->
        <!-- ******* content ******* -->
        <div class="column">
          <nuxt/>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/html/Header.vue'
  import Footer from '@/components/html/Footer.vue'
  import Navigator from '@/components/html/Navigator.vue'

  export default {
    components: {
      Header,
      Footer,
      Navigator
    }
  }
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

</style>
