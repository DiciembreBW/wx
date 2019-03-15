<template lang="pug">
div.container
  div.row.center-align
    h4 Login
    p.grey-text adawddawdawdawda wfalkmgskleg mskelgmkS
  div.row
    div.col.s12.m6
      p
        input(v-model="text")
      p
        button(@click='click') click
      //- pre {{items}}
      span {{value.length}}
      //- span {{$store.state.$_data.length}}
      li(v-for='item in value') {{item.id}}
        button(@click="remove(item.id)") ลบ
          i.material-icons delete
      //- pre {{data}}
</template>

<script>
import Firebase from '@/plugins/fb'
const Test = new Firebase('test')
Test.snapShot()
export default {
  async asyncData ({store}) {
    return {
      text: '',
      value: Test.$_data
    }
  },
  methods: {
    click: function () {
      Test.root.add({
        text: this.text
      })
    },

    remove: function(id) {
      Test.root.doc(id).delete()
    }
  
  }
}
</script>

<style>

</style>
