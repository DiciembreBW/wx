<template>
    <table class="table is-fullwidth is-hoverable">
  <thead>
    <tr>
      <td v-for="(config, index) in data.config" :key="index">{{config.label}}</td>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in data.items" :key="index">
        <td v-for="(config, index) in data.config" :key="index">
            <nuxt-link :to="'/customer/'+item._key">
                {{item[config.field]}}
            </nuxt-link>
        </td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
    props: {
        data: {}
    }
}
</script>
