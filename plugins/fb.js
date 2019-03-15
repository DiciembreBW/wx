import _ from 'lodash'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

if (!firebase.apps.length) {
    var config = {
    apiKey: "AIzaSyC26ML4ylmEDSH6oDETj9av-Qwi-yyzCKs",
    authDomain: "insure-muk.firebaseapp.com",
    databaseURL: "https://insure-muk.firebaseio.com",
    projectId: "insure-muk",
    storageBucket: "insure-muk.appspot.com",
    messagingSenderId: "399309068670"
  };
  // config insurenace porject

    firebase.initializeApp(config)
}
const FIRESTORE = firebase.firestore()
// end  config

export default class {
    $_data = []

    constructor (refName) {
        this.root = FIRESTORE.collection(refName)

        // // assign onSnapshot
        // this.root.onSnapshot(query => {
        //   this.$_docChange = query.docChanges()
        // })

        return this
    }

    //  watch realtime data
    snapShot = (store) => {
      this.root.onSnapshot(query => {
        query.docChanges().forEach(doc => {

          if (doc.type == 'added') {
            this.$_data.push({
              id: doc.doc.id,
              ...doc.doc.data()
            })
          }

          if (doc.type == 'removed') {
            // https://gist.github.com/scottopolis/6e35cf0d53bae81e6161662e6374da04
            const index = this.$_data.map(el => el.id).indexOf(doc.doc.id)

            this.$_data.splice(index, 1)
          }
        })
      })

      return this
    }

}



// *** methods ***
const _onChange = (doc) => {

  return new Promise((resolve, reject) => {

    if (doc && Array.isArray(doc)) {

      doc.forEach(item => {
        switch (item.type) {
          case 'added':
            resolve(item.doc.data())
            break
          case 'removed':
            console.log('removed')
            break
          default:
        }
      }) // end foreach
    } // end if

  })

}