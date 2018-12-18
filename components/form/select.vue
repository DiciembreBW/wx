<template>
    <div>
        <slot>label </slot>
        <select @change="$emit('pass', $event.target.value)">
            <option v-for="(v, i) in data" :key="i" :value="v">{{v}}</option>       
        </select>
    </div>
</template>

<script>
export default {
    props: {
        data: {type: Array, required: true}
    },
    data () {
        return {
        }
    },
}
</script>