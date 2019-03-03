<template>
    <div>
        <div class="input-field col s12" v-for="(item, index) in items.fields" :key="index">
            <!-- <i class="material-icons prefix">account_circle</i> -->
            <input type="text" class="validate" id="icon_prefix" :class="item.name" :placeholder="item.label">
            <!-- <label for="icon_prefix"> {{item.label}} </label> -->
        </div>
    </div>
</template>

<script>
import Cleave from '@/node_modules/cleave.js/dist/cleave.min.js'
import CleaveRegion from '@/node_modules/cleave.js/dist/addons/cleave-phone.th'

export default {
    props: {
        items: {type: Object},
        // value: {type: Object}
    },
    mounted () {
        let {fields} = this.items
        
        fields.map(item => {
            let className = '.' + item.name
            let config = item.cleaveConfig || {}

            new Cleave(className, config)
        })
        // new Cleave()
        
    },
    data () {
        return { }
    }
}
</script>

<style>

</style>
