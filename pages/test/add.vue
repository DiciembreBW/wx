<template>
  <div>
      <div class="field">
        <!-- <pre> {{$store.state.value}} </pre> -->
      </div>
      <keep-alive>
            <component :is="collect_a[0]" :next="next" :back="back" ></component>
      </keep-alive>
  </div>
</template>

<script>
import a from '@/components/test/1'
import b from '@/components/test/2'
import c from '@/components/test/3'
import d from '@/components/test/4'

import _ from 'lodash'

export default {
  data() {
    let arr = [a, b, c, d]
    // this.x = _.remove(this.x, e => {
    //   return e[0]
    // })
    return {
      collect_a: [a,b,c,d],
      collect_b: []
    }
  },
  methods: {
    back: function () {
      let dataFromShift = this.collect_b.shift()
      this.collect_a.unshift(dataFromShift)
    },
    
    next: function (value) {
      // remove first array
      let dataFromShift = this.collect_a.shift()

      // asign collect b
      this.collect_b.unshift(dataFromShift)

      //
      // console.log(value)
      // this.$store.commit('assignValue', value)
      // console.log('pass')
      this.$store.commit('assignValue', value)
    }
  }
}

</script>

<style>

</style>
