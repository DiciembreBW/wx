<template>
    <div>
        item page
        {{$route.params}}
        <item-component :data="$route.params" />
    </div>
</template>

<script>
import ItemComponent from '@/components/ItemsComponent'
export default {
    components: {
        ItemComponent
    },

    props: {
        item: {type: Object}
    },

    data: function () {
        return {
            
        }
    }
}
</script>
