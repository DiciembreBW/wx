<template>
  <div class="container">

    <navigator/>
    <section class="section">
      <div class="columns is-centered">
        <div class="column is-half">


          <nuxt/>

          <!-- <div class="row">
            <div class="field">
              <div class="control">
                <input type="text" class="input is-radius-large search" placeholder="ค้นหา">
              </div>
            </div>
          </div> -->

         
        </div>
      </div>
    </section>

    <!-- <Navigator />

    <section class="section">
      <nuxt/>
    </section>

    <Footer /> -->

  </div>
</template>


<script>
  // import ItemNavigator from '@/components/html/ItemNavigator.vue'
  // import Footer from '@/components/html/Footer.vue'
  import Navigator from '@/components/html/Navigator.vue'

  export default {
    components: {
      // ItemNavigator,
      // Footer,
      Navigator
    }
  }
</script>
