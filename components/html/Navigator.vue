<template>
<!-- <nav class="orange" id="nav">
      <div class="nav-wrapper">
        <nuxt-link to="/" class="brand-logo">DRR Insr</nuxt-link>
        <ul id="nav-mobile" class="right hide-on-small-and-down">
          <li> <nuxt-link to="/"> หน้าแรก </nuxt-link> </li>
          <li> <nuxt-link to="/item"> เพิ่มข้อมูล</nuxt-link> </li>
          <li> <nuxt-link to="/login"> เข้าสู่ระบบ </nuxt-link> </li>
        </ul>
      </div>
    </nav> -->
    <div>
      <nav class="nav-extended orange">
    <div class="nav-wrapper container">
      <nuxt-link to="/" class="brand-logo hide-on-med-and-down">สนง.นายหน้าประกันวินาศภัยดุรงฤทธิ์</nuxt-link>
      <nuxt-link to="/" class="brand-logo hide-on-large-only">DRR Broker</nuxt-link>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <!-- <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li> -->
        <li> <nuxt-link to="/"> หน้าแรก </nuxt-link> </li>
          <li> <nuxt-link to="/item"> เพิ่มข้อมูล</nuxt-link> </li>
          <li> <nuxt-link to="/login"> เข้าสู่ระบบ </nuxt-link> </li>
      </ul>
    </div>
    <!-- <div class="nav-content">
      <ul class="tabs tabs-transparent">
        <li class="tab"><a href="#test1">Test 1</a></li>
        <li class="tab"><a class="active" href="#test2">Test 2</a></li>
        <li class="tab disabled"><a href="#test3">Disabled Tab</a></li>
        <li class="tab"><a href="#test4">Test 4</a></li>
      </ul>
    </div> -->
  </nav>

  <ul class="sidenav" id="mobile-demo">
     <li> <nuxt-link to="/"> หน้าแรก </nuxt-link> </li>
          <li> <nuxt-link to="/item"> เพิ่มข้อมูล</nuxt-link> </li>
          <li> <nuxt-link to="/login"> เข้าสู่ระบบ </nuxt-link> </li>
  </ul>
    </div>
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
  mounted () {
    this.$materialize.sidenav()
  },
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