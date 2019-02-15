<template>
  <div class="field">
    <h1 class="title">พ.ร.บ.</h1>

    <div class="field">
        <label class="label">วันหมดประกัน (วัน/เดือน/ปี พ.ศ.)</label>
        <div class="control">
            <input type="text" class="input pragun" v-model="value.pragun">
        </div>
    </div>

    <div class="field">
        <label class="label">วันหมดภาษี (วัน/เดือน/ปี พ.ศ.)</label>
        <div class="control">
            <input type="text" class="input pasee" v-model="value.pasee">
        </div>
    </div>

    <div class="field">
        <label class="label">วันหมด พ.ร.บ.(วัน/เดือน/ปี พ.ศ.)</label>
        <div class="control">
            <input type="text" class="input prb" v-model="value.prb">
        </div>
    </div>

    <div class="field">
        <label class="label">ทุนประกัน</label>
        <div class="control">
            <input type="text" class="input" v-model="value.tun">
        </div>
    </div>

    <div class="field is-grouped is-grouped-centered">
        <div class="control">
            <button v-if="apply" class="button" @click="apply(value)">apply</button>
        </div>
    </div>
  </div>
</template>

<script>
import testFirestore from '@/plugins/boydPlugins'
import _ from 'lodash'

import Cleave from '@/node_modules/cleave.js/dist/cleave.min.js'
import CleaveRegion from '@/node_modules/cleave.js/dist/addons/cleave-phone.th'

let car = new testFirestore('car')

export default {
  props: {
      apply: {type: Function}
  },

    mounted () {
        new Cleave('.pragun', {
            onValueChanged: event => {
                console.log(event.target.value)
            }
        })
    },

  data () {
    return {
      value: {}
    }
  },

  computed: {
 
  },

  watch: {

  }

}
</script>
