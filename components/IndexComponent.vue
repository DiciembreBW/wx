<template>
    <div class="section">
        <div class="row">
            <div class="col s10">
                <div class="input-field">
                    <i class="material-icons prefix">search</i>
                    <input id="icon_telephone" type="text" class="validate">
                    <label for="icon_telephone">ค้นหา</label>
                </div>
            </div>
            <div class="col s2">
                <div class="input-field">
                    <i class="material-icons prefix">list</i>
                </div>
            </div>
        </div>

        <div class="row">
            <thumb v-for="(item, index) in data"
                :key="index"
                :data="item"
            />
        </div>
    </div>
</template>

<script>
import Thumb from '@/components/thumb.vue'


export default {
    components: { Thumb },
    data () {
        let Items = new this.$Firestore('items')

        Items.onSnapshot().then(doc => {
            console.log(doc)
        })
    
        return {
            data: []
        }
    }
}
</script>

<style>

</style>
