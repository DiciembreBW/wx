import {auth} from '@/plugins/Firestore'
// https://hackernoon.com/vue-nuxt-firebase-auth-database-ssr-example-tutorial-facebook-login-setup-authentication-starter-app-a6dfde0133fc

// export default context => {
//     const {store, redirect, route} = context
 
//     auth.onAuthStateChanged(user => {
//         if (user) store.commit('setUser', true);
//         // else redirect('/login')
//     })
// }
// export default context => new Promise((resolve, reject) => {
//   auth.onAuthStateChanged(user => {
//     resolve(user || false)
//   })
// })