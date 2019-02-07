<template>
  <div>
      <div class="field">

      </div>
      <keep-alive>
            <component :is="collect_a[0]"></component>
      </keep-alive>
      <br>
      <br>
      <br>
      <br>
      <div class="field is-grouped">
        <div class="control is-large">
          <button class="button"  :disabled="collect_b == 0" @click="back">back</button>
        </div>
        <div class="control">
          <button class="button" :disabled="collect_a.length == 1" @click="next">next</button>
        </div>
      </div>

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
    
    next: function () {
      // remove first array
      let dataFromShift = this.collect_a.shift()

      // asign collect b
      this.collect_b.unshift(dataFromShift)
    }
  }
}

</script>

<style>

</style>
