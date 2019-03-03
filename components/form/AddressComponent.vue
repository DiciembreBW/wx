<template>
    <div>
        <div class="input-field col s12" v-for="(item, index) in items.fields" :key="index">
            <!-- <i class="material-icons prefix">account_circle</i> -->
            <input type="text" class="validate" :id="item.name" :placeholder="item.label">
        </div>
            <!-- <div class="input-field col s12">
                <i class="material-icons prefix">address</i>
                <input type="text" class="validate" :id="item.name">
                <label for="icon_prefix">{{item.label}}</label>
            </div> -->
        <!-- <h1 class="title">ที่อยู่</h1>
        <div class="field">
            <div class="control has-icons-left has-icons-right">
            <input type="text" id="district" class="input is-large" placeholder="">
                <span class="icon is-medium is-left">
                </span>
            </div>
        </div>

        <div class="field">
            <div class="control has-icons-left has-icons-right">
            <input type="text" id="amphoe" class="input is-large" placeholder="อำเภอ">
                <span class="icon is-medium is-left">
                </span>
            </div>
        </div>

        <div class="field">
            <div class="control has-icons-left has-icons-right">
            <input type="text" id="province" class="input is-large" placeholder="จังหวัด">
                <span class="icon is-medium is-left">
                </span>
            </div>
        </div>

        <div class="field">
            <div class="control has-icons-left has-icons-right">
            <input type="text" id="zipcode" class="input is-large" placeholder="รหัสไปรษณีย์">
                <span class="icon is-medium is-left">
                </span>
            </div>
        </div>

        <div class="field">
          <button class="button" @click="back">ย้อนกลับ</button>
          <button class="button" @click="next({address: value})">ถัดไป</button>
        </div> -->
    </div>
</template>

<script>
import $ from 'jquery'

export default {
    props: {
        items: {type: Object}
    },
    mounted () {
            let fill = this.items
            $.Thailand({
                $district: $('#district'), // input ของตำบล
                $amphoe: $('#amphoe'), // input ของอำเภอ
                $province: $('#province'), // input ของจังหวัด
                $zipcode: $('#zipcode'), // input ของรหัสไปรษณีย์

                onDataFill: fill.onDataFill
            })
        },

        data () {
            return {}
        },
}
</script>

<style>

</style>
