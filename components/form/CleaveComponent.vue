<template>
    <div class="field">
        <label class="label is-size-7">
            <slot>label</slot>
        </label>
        <input type="text" @keyup="$emit('input', $event.target.value)" class="input" :class="elementName">
    </div>
</template>

<script>
// 1. import cleave.js
import Cleave from '@/node_modules/cleave.js/dist/cleave.min.js'
import CleaveRegion from '@/node_modules/cleave.js/dist/addons/cleave-phone.th'


export default {
    props: {
        elementName: {type: String, required: true},
        config: {type: Object}
    },

    data: function () {
        return {
        }
    },

    mounted () {
        new Cleave('.' + this.elementName, {
            ...this.config
        })
    }
}
</script>

