export const state = () => ({
    counter: 0,
    value: {}
})

export const mutations = {
    increment (state) {
        state.counter ++
    },

    assignValue: function (state, data) {
        Object.assign(state.value, data)
    }
}
