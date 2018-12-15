// file plugin

// inject plugin
import Vue from 'vue'

// import firebase
import {fireDb} from './firebase.js'
// 

Vue.prototype.$test = () => console.log('running...')
// ใช้ this.$test() ในหน้า index.vue or etc.
// ใน function methods ก็ได้
// 

// function brand
Vue.prototype.$brand = {
    value: { },
    set: function (args) {
       this.value = args
        // set ref
        this.value.ref = fireDb.collection(args.collectionName)

        return this 
    },
    get: function () {
        console.log(this.value)
        return this
    },
    add: function () {
        let {ref, data} = this.value

        ref.add(data)
    } 
}
// 

export default ({app}, inject) => {

    app.test= value => console.log('pass + ', value)

}
