<template>
    <div class="field">
        <!-- <select-component></select-component> -->
        <div class="field">
            <label class="label is-size-7">ชื่อยี่ห้อรถ</label>
            <div class="control">
                <div class="select">
                    <select v-model="selected">
                        <option selected disabled>---------------------------</option>
                        <option v-for="(item, index) in CarData" :key="index" :value="item.brand"> {{item.brand}} </option>
                    </select>
                </div>
            </div>
        </div>

        <div class="field">
            <label class="label is-size-7">รุ่นรถ</label>
            <div class="control">
                <div class="select">
                    <select v-model="versionSelected">
                        <option selected disabled>---------------------------</option>
                        <option v-for="(item, index) in versionData" :key="index" :value="item"> {{item}} </option>
                    </select>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import SelectComponent from '@/components/form/SelectComponent'

import _ from 'lodash'

import CarData from '@/static/car-list.json'

export default {
    props: {
        data: {type: String}
    },

    data: function () {
        return {
            CarData: CarData,
            selected: null,
            versionSelected: null,
            versionData: []
        }
    },

    components: {
        SelectComponent
    },

    watch: {
        selected (event) {
            _.map(CarData, (e) => {
                if (e.brand == event) {
                    this.versionData = e.models
                }
            })
        },

        versionSelected (event) {
            this.$emit('input', {
                name: this.selected,
                version: event
            })
            // console.log(e)
        }
    }
}   
</script>
