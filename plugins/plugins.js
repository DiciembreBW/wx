import Vue from 'vue'
import {
  Firestore
} from '@/plugins/boydPlugins'

let myPlugins = {
  install(Vue, options) {
    Vue.mixin({
      data() {
        return {
          VALUES: {
            set:{},
            get: []
          }
        }
      }, // data

      mounted() {}, // mounted

      methods: {
        ...Firestore,
        test: function () {
          console.log('save from plugins')
        }
      }, // methods

      computed: {

      }, // compputed
    })
  }
}

Vue.use(myPlugins)

export default myPlugins
