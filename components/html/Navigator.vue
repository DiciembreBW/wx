<template>
  <nav class="navbar color" role="navigation" aria-label="main navigation">
    <div class="container">

      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item" style="color: white;">
          <!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> -->
          สำนักงานประกันวินาศภัยดุรงค์ฤทธิ์ <br>
          <!-- <small> ประกันภัยทุกชนิด, ประกันอุบัติเหตุ, ประกันอัคคีภัย, ประกันชีวิต </small> -->
        </nuxt-link>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <!-- <div class="navbar-start">
          <nuxt-link to="addItemPage" class="navbar-item">
            เพิ่มข้อมูล
          </nuxt-link>

          <nuxt-link to="CustomerPage" class="navbar-item">
            ระบบจัดการข้อมูลลูกค้า
          </nuxt-link>

        </div> -->

        <div class="navbar-end">
          <div class="navbar-item">
            <!-- <div class="buttons">
              <nuxt-link to="color" class="button is-light">
                สี
              </nuxt-link>
              <nuxt-link to="prb" class="button is-light">
                พ.ร.บ.
              </nuxt-link>
              <nuxt-link to="corp" class="button is-light">
                บริษัทประกันภัย
              </nuxt-link>
             </div> -->
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!-- <nav class="panel">
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

    <nuxt-link to="/CustomerPage" class="panel-block is-active">
      <span class="panel-icon">
        <i class="fas fa-book" aria-hidden="true"></i>
      </span>
      ระบบจัดการข้อมูลลูกค้า
    </nuxt-link>

  </nav> -->
</template>

<style scoped>
.color {
  background-color: tomato;
}
</style>

