import Vue from 'vue'

let myPlugins = {
  install(Vue, options) {
    Vue.mixin({
      data() {
        return {
          data: [],
          VALUES: {
            set:{},
            get: []
          }
        }
      }, // data

      mounted() {}, // mounted

      methods: {
        test: function () {
          console.log(this.ref)
        },
        save: function () {
          this.ref.addDocument(this.VALUES.set)
        },

        remove: function(_key) {
          this.ref.removeDocument(_key)
        }
      }, // methods

      computed: {

      }, // compputed
    })
  }
}

Vue.use(myPlugins)

export default myPlugins
