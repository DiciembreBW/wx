<template>
    <div>
        <input type="text"
            :class="data.name"
            :placeholder="data.label"
            @keyup="passData"
        >

    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },

    data () {
        return {
        }
    },

    mounted () {
        let {data} = this

        let config = data.config || {
            blocks: [18]
        }

        new this.$Cleave('.' + data.name, config)
    },

    methods: {
        passData: function(event) {
            // this.$emit('callback', event.target.value)
            this.$emit('input',  event.target.value)
        }
    }
}
</script>

<style>

</style>
