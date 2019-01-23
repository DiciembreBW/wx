import Vue from 'vue'

let myPlugins = {
    install (Vue, options) {
        Vue.mixin ({
            data () {
                return {
                    
            }}, // data

            mounted() {
            }, // mounted

            methods: {
                
            }, // methods

            computed: {
                
            }, // compputed
        })
    }
}

Vue.use(myPlugins)

export default myPlugins
