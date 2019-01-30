import _ from 'lodash'
import {fireDb} from '@/plugins/Firestore'
import {etc} from '@/plugins/Etc'

export let Firestore = {
    get: function ({databaseName}) {
        return new Promise((resolve, reject) => {
            try {
                let ref = fireDb.collection(databaseName).get()
                resolve(etc.querydatafromfirestore(ref))
            }
            catch (err) {
                console.log(err)
            }
        })
    },
    
    // https://cloud.google.com/firestore/docs/query-data/get-data
    getDoc: function ({databaseName, docName}) {
        return new Promise((resolve, reject) => {
            let ref = fireDb.collection(databaseName).doc(docName)
            ref.get().then(doc => {
                resolve(doc.data())
            })
        })
    },
        
    // https://cloud.google.com/firestore/docs/query-data/get-data
    getWhere: function ({type, value}) {
        return new Promise((resolve, reject) => {
            let ref = fireDb.collection('cars').where(type, '==', value).get()
            resolve(etc.querydatafromfirestore(ref))
        })
    }
}