<template>
    <div>
        <label><slot>label</slot></label>
        <input type="text"
            @keyup="$emit('input', $event.target.value)"
            class="input" placeholder="เบอร์" :class="elementName">
    </div>
</template>

<script>
import Cleave from '@/node_modules/cleave.js/dist/cleave.min.js'
import CleaveRegion from '@/node_modules/cleave.js/dist/addons/cleave-phone.th'
export default {
    props: {
        elementName: {type: String, required: true}
    },

    mounted () {
        let cleav = new Cleave('.' + this.elementName, {
            phone: true,
            phoneRegionCode: 'TH'
        })
    },
    data () {
        return {
        }
    }
}
</script>

