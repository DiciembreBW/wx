
import Vue from 'vue'
import Firestore from '@/plugins/fb'
import Faker from 'faker'
import Cleave from 'cleave.js'
import 'cleave.js/dist/addons/cleave-phone.th'

Vue.prototype.$Firestore = Firestore
Vue.prototype.$Faker = Faker
Vue.prototype.$Cleave = Cleave
