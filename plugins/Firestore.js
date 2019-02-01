import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {

    // const config = {
    //     apiKey: 'AIzaSyDrelWMLh8n0amFb7JEJ2TDPU2hc-XDJXA',
    //     authDomain: 'wx-db-i.firebaseapp.com',
    //     databaseURL: 'https://wx-db-i.firebaseio.com',
    //     projectId: 'wx-db-i',
    //     storageBucket: 'wx-db-i.appspot.com',
    //     messagingSenderId: '288671693811'
    // }
    // config  wx project

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
    firebase.firestore().settings({timestampsInSnapshots: true})
}

firebase.firestore().settings({timestampsInSnapshots: true})

const fireDb = firebase.firestore()

export {fireDb}
