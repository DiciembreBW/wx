// file plugin

// inject plugin
import Vue from 'vue'

Vue.prototype.$test = () => console.log('pass')
// ใช้ this.$test() ในหน้า index.vue or etc.
// ใน function methods ก็ได้
// 
export default ({app}, inject) => {

    app.test= value => console.log('pass + ', value)

}
