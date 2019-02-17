<template>
<table class="table is-fullwidth is-hoverable">
  <thead>
    <tr>
      <!-- <td>รหัส พ.ร.บ.</td> -->
      <td>@</td>
      <td>ชื่อ-สกุล ลูกค้า</td>
      <td>ทะเบียนรถ</td>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in data" :key="index">
      <!-- <td>{{item.brand}}</td> -->
      <td> <span class="icon"> <i class="fas fa-user"></i> </span> </td>
      <td>{{item.firstname}} {{item.lastname}}</td>
      <td>{{item.plate}}</td>
    </tr>
  </tbody>
</table>
</template>
<script>
export default {
  props: {
    data: {}
  },

  data() {
    return {}
  }
}
</script>