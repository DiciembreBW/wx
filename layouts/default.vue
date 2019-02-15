<template>
  <div class="container">
    <div class="nav"></div>
    <div class="nav2">
      <a href="">หน้าแรก</a>
      <a href="">เพิ่มข้อมูล</a>
      <a href="">ลูกค้า</a>
      <a href="">จัดการข้อมูล</a>
      <a href="">อู่รถ</a>
    </div>
    <!-- <Navigator />

    <section class="section">
      <nuxt/>
    </section>

    <Footer /> -->

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
