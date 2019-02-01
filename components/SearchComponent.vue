<template>
    <div class="items">


        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">ค้นหา</label>
            </div>
            <div class="field-body">
                <div class="field">
                <p class="control is-expanded has-icons-left">
                    <input v-model="value" class="input" type="text" placeholder="ค้นหา">
                    <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                    </span>
                </p>
                </div>
                <div class="field">
                    <div class="control is-expanded has-icons-left has-icons-right">
                        <div class="select">
                            <select v-model="type">
                                <option disabled selected>จาก</option>
                                <option v-for="(item, index) in fields" :key="index" :value="item.field"> {{item.desc}} </option>
                            </select>
                        </div>
                    </div>
                    <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                    </span>
                </div>
                <div class="field">
                    <div class="control">
                        <button class="button" @click="search">ค้นหา</button>
                    </div>
                </div>
            </div>
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
    /* display: flex;
    justify-content: center;
    flex-direction: row; */
}
.item {
    padding: 8px 12px;
}
</style>

