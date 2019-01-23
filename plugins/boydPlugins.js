import _ from 'lodash'

export let a = {
    $_arr (arr, key) {
        return _.map(arr, key)
    }
}