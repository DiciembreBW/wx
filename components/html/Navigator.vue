<template>
<nav class="orange" id="nav">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Logo</a>
        <ul id="nav-mobile" class="right hide-on-small-and-down">
          <!-- <li><a href="sass.html">เข้าสู่ระบบ</a></li> -->
          <li> <nuxt-link to="/login"> เข้าสู่ระบบ </nuxt-link> </li>
        </ul>
      </div>
    </nav>
  <!-- <nav class="navbar" role="navigation" aria-label="main navigation" id="navigator-wrap">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
      </a>

      <a @click="toggle" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="toggleMenu ? 'is-active' : ''">
      <div class="navbar-start"  @click="toggle">
        <nuxt-link to="/" class="navbar-item">หน้าแรก</nuxt-link>
        <nuxt-link to="/work" class="navbar-item">เพิ่ม</nuxt-link>
        <nuxt-link to="/customer" class="navbar-item">ลูกค้า</nuxt-link>
        <nuxt-link to="/car" class="navbar-item">รถ</nuxt-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <button @click="login" v-if="!$auth.loggedIn" class="button"> เข้าสู่ระบบ </button>
            <div v-else class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
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
  </nav> -->

</template>

<style lang="scss" scoped>
$dark: rgba(0, 0, 0, 0.5);
$color_a: #C3AD85;
#navigator-wrap {
  background-color: $color_a;
  box-shadow: 0 1px 5px 1px $dark;
  .navbar-link:not(.is-arrowless)::after  {
    border: none;
  }
  a { 
    color: white;
    
    &:hover {
      // background-color: 
      background: none;
    }
  }


  .burger {
    color: rgba(255, 255, 255, 0.5);
    span {
      width: 32px;
      height: 2px;
    }
  }
}
</style>


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