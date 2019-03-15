<template>
  <div>
    <div class="row center-align">
      <h4>เพิ่มข้อมูล</h4>
      <p>กรุณากรอกข้อมูลให้ครบทุกช่อง </p>
    </div>
    <div class="container">
      <!-- component -->
      <!-- <customer-component /> -->
      <!-- <address-component /> -->
      <keep-alive>
      <component :is="isComponent[$store.state.current]"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import CustomerComponent from '@/components/form/CustomerComponent'
import AddressComponent from '@/components/form/AddressComponent'
import CarComponent from '@/components/form/CarComponent'
import InsuranceComponent from '@/components/form/InsuranceComponent'
export default {
  data () {
    return {
      isComponent: [
        CustomerComponent,
        AddressComponent,
        CarComponent,
        InsuranceComponent
      ],
    }
  }
}
</script>

<style>

</style>
