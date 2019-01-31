<template>
  <nav class="panel">
    <p class="panel-heading">
      เมนูการนำทาง
    </p>
    <nuxt-link to="/" class="panel-block is-active">
      <span class="panel-icon">
        <i class="fas fa-book" aria-hidden="true"></i>
      </span>
      หน้าแรก
    </nuxt-link>

    <nuxt-link to="/addItemPage" class="panel-block is-active">
      <span class="panel-icon">
        <i class="fas fa-book" aria-hidden="true"></i>
      </span>
      เพิ่มข้อมูล
    </nuxt-link>

    <nuxt-link to="/brand" class="panel-block is-active">
      <span class="panel-icon">
        <i class="fas fa-book" aria-hidden="true"></i>
      </span>
      ยี่ห้อรถ
    </nuxt-link>

    <nuxt-link to="/CustomerPage" class="panel-block is-active">
      <span class="panel-icon">
        <i class="fas fa-book" aria-hidden="true"></i>
      </span>
      ระบบจัดการข้อมูลลูกค้า
    </nuxt-link>

  </nav>
</template>
