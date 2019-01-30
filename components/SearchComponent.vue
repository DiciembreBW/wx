<template>
    <div class="items">
        <div class="item">
            <button class="">ค้นหา</button>
        </div>
        <div class="item">
            <input type="text" v-model="value" name="" id="" placeholder="ค้นหา">
        </div>
        <div class="item">
            จาก
        </div>
        <div class="item">
            <select v-model="type">
                <option v-for="(item, index) in fields" :key="index" :value="item.field"> {{item.desc}} </option>
            </select>
        </div>
        <div class="item">
            <button class="" @click="search">ตกลง</button>
        </div>
    </div>
</template>

<script>
import Data from '@/static/initialData.json'
export default {
    data () {
        return {
            fields: Data.fields,
            value: '',
            type: ''
        }
    },

    methods: {
        search: function() {
            this.$emit('input', {
                value: this.value,
                type: this.type
            })
        }
    }
}
</script>

<style scoped>
.items {
    display: flex;
    justify-content: center;
    flex-direction: row;
}
.item {
    padding: 8px 12px;
}
</style>

