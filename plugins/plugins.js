let myPlugins = {
    install (Vue, options) {
        Vue.mixin ({

            mounted() {
                console.log('pass')
            },
        })
    }
}

export default myPlugins
