<template>
    <div>
        <!-- <input type="text" name="" id=""> -->

        <div class="field is-horizontal">
            <div class="control">
                <button class="button is-link" @click="apply"> apply </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        apply: {type: Function}
    }
}
</script>

<style>

</style>
