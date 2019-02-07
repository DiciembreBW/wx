<template>
    <div>
        <h1 class="title">ที่อยู่</h1>
        <div class="field">
            <div class="control has-icons-left has-icons-right">
            <input type="text" id="district" class="input is-large" placeholder="ตำบล">
                <span class="icon is-medium is-left">
                <!-- <i class="fas fa-lg fa-car" ></i> -->
                </span>
            </div>
        </div> <!-- end -->

        <div class="field">
            <div class="control has-icons-left has-icons-right">
            <input type="text" id="amphoe" class="input is-large" placeholder="อำเภอ">
                <span class="icon is-medium is-left">
                <!-- <i class="fas fa-lg fa-car" ></i> -->
                </span>
            </div>
        </div> <!-- end -->

        <div class="field">
            <div class="control has-icons-left has-icons-right">
            <input type="text" id="province" class="input is-large" placeholder="จังหวัด">
                <span class="icon is-medium is-left">
                <!-- <i class="fas fa-lg fa-car" ></i> -->
                </span>
            </div>
        </div> <!-- end -->

        <div class="field">
            <div class="control has-icons-left has-icons-right">
            <input type="text" id="zipcode" class="input is-large" placeholder="รหัสไปรษณีย์">
                <span class="icon is-medium is-left">
                <!-- <i class="fas fa-lg fa-car" ></i> -->
                </span>
            </div>
        </div> <!-- end -->

        <div class="field">
          <button class="button" @click="back">ย้อนกลับ</button>
          <button class="button" @click="next({address: value})">ถัดไป</button>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
    props: {
        next: {},
        back: {}
    },
    mounted () {
            $.Thailand({
                $district: $('#district'), // input ของตำบล
                $amphoe: $('#amphoe'), // input ของอำเภอ
                $province: $('#province'), // input ของจังหวัด
                $zipcode: $('#zipcode'), // input ของรหัสไปรษณีย์

                onDataFill: data => {
                    this.value = {...data}
                }
            })
        },

        data () {
            return {
                value: {}
            }
        },
}
</script>

<style>

</style>
