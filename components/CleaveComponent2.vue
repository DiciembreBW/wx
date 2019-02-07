<template>
    <div>

        <div v-if="Cleave.select" class="control has-icons-left has-icons-right">
            <span class="select is-fullwidth is-large ">
                <select v-model="selected">
                    <option v-for="(item, index) in Cleave.select" :key="index" :value="item"> {{item.desc}} </option>
                </select>
               
            </span>
            <span class="icon is-medium is-left">
                     <i :class="Cleave.icon" class="fas fa-lg" ></i>
                 </span>
        </div>
    
        <div v-else class="control has-icons-left has-icons-right">
        <input
            type="text"
            @keyup="handle($event)"
            :class="Cleave.name"
            :placeholder="Cleave.desc"
            :disabled="Cleave.disable"
            class="input is-large">

            <span class="icon is-medium is-left">
            <i :class="Cleave.icon" class="fas fa-lg" ></i>
            </span>
            <!-- <span class="icon is-medium is-right">
            <i class="fas fa-check fa-lg"></i>
            </span> -->
        </div>

        <div v-if="Cleave.action" class="field" style="margin-top: 12px;">
            <div class="control">
                <button class="button is-link is-fullwidth" @click="Cleave.action.handle">{{Cleave.action.desc}}</button>
            </div>
        </div>

    </div>
</template>

<script>
// 1. import cleave.js
import Cleave from '@/node_modules/cleave.js/dist/cleave.min.js'
import CleaveRegion from '@/node_modules/cleave.js/dist/addons/cleave-phone.th'

// https://github.com/nosir/cleave.js/blob/master/doc/options.md

export default {
    props: {
        Cleave: {type: Object},
        value: {}
    },

    data: function () {
        return {
            selected: this.value
        }
    },

    methods: {
        handle: function (event) {
            this.$emit('input', {
                ...this.Cleave,
                value: event.target.value
            })
        }
    },

    mounted () {
        if (this.Cleave.config) {
            new Cleave('.' + this.Cleave.name, {
                ...this.Cleave.config
            })
        }
    },

    watch: {
        selected (VALUE) {
            this.$emit('input', VALUE)
        }
    }
}
</script>

