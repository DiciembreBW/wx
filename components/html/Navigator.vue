<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> -->
        <!-- <span style="height: 28; width: 112;">สำนักงานนายหน้าประกันวินาศภัยดุรงฤทธิ์</span>  -->
      </a>

      <a @click="toggle" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="toggleMenu ? 'is-active' : ''">
      <div class="navbar-start">
        <nuxt-link to="/" class="navbar-item">หน้าแรก</nuxt-link>
        <nuxt-link to="/work" class="navbar-item">เพิ่ม</nuxt-link>
        <nuxt-link to="/customer" class="navbar-item">ลูกค้า</nuxt-link>
        <nuxt-link to="/car" class="navbar-item">รถ</nuxt-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <!-- <a class="button is-primary">
              <strong>Sign up</strong>
            </a> -->
            <button @click="login" v-if="!$auth.loggedIn" class="button"> เข้าสู่ระบบ </button>
            <!-- ** dropdown -->
            <div v-else class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                <!-- More -->
                <img :src="$auth.user.picture" alt=""> <span> {{$auth.user.name}} </span>
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item">
                  {{$auth.user.email}}
                </a>
                <a class="navbar-item">
                  {{$auth.user.gender}}
                </a>
                <a class="navbar-item">
                  {{$auth.user.locale}}
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item" @click="logout">
                  ออกจากระบบ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  data () {
    return {
      toggleMenu: false
    }
  },

  methods: {
    login: function () {
      console.log('passss')
      this.$auth.loginWith('google')
    },
    toggle: function () {
      this.toggleMenu = !this.toggleMenu
    },

    logout: function () {
      this.$auth.logout().then(() => {
        this.$router.push('/login')
      })
    }
  }
}
</script>