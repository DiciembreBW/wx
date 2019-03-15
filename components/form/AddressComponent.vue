<template lang="pug">
<div>
  h5 ที่อยู่
  .row(v-for="addr in $store.state.Datas.address.fields")
    .col.s12
      .input-field
        input(type='text'
        :name='addr.name'
        v-validate='addr.validate'
        :id="addr.name"
        )

        span.helper-text.red-text {{errors.first(addr.name)}}

  .input-field
    button.waves-effect.waves-light.btn.white.grey-text(@click="$store.commit('decrementCurrent')") ย้อนกลับ
    button.waves-effect.waves-light.btn(@click='next') ถัดไป
</div>
</template>

<script>
import $ from 'jquery'
export default {
    mounted () {
        $.Thailand({
            $district: $("#district"),
            $amphoe: $("#amphoe"),
            $province: $("#province"),
            $zipcode: $("#zipcode"),
            onDataFill: (callbackValue) => {
                this.value = callbackValue
            }
        })
    },

    data () {
        return {
            value: {}
        }
    },

    methods: {
        next: async function(arg) {
            const onValidate = await this.$validator.validate()
            if (onValidate) {
                this.$store.commit('assign', {
                    name: 'address',
                    value: this.value
                })

                this.$store.commit('incrementCurrent')
            }
        }
    }
}
</script>

<style>

</style>
