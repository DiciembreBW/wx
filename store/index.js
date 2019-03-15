import data from '@/assets/form.json'
import Firebase from '@/plugins/fb'
export const state = () => ({
    current: 0,
    Datas: data,
    Value: {
        customer: {},
        address: {},
        car: {},
        insurance: {}
    },
    $_data: []
})

export const mutations = {
    incrementCurrent: function(state, i) {
        state.current ++
    },

    decrementCurrent: function(state, i) {
        state.current --
    },

    assign: function(state, {name, value}) {
        state.Value[name] = value
    },

    _push_data: function (state, value) {
       state.$_data.push(value)
    },

    _pop_data: function (state, value) {
       state.$_data.splice(value, 1)
    }
}

export const strict = false
