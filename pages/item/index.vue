<template>
  <div class="section container">
    <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum itaque aliquid blanditiis ut molestiae perspiciatis temporibus assumenda dolore? Rerum earum tempora culpa sapiente sunt velit dolor labore quaerat, praesentium asperiores? -->
    <form-wizard title="เพิ่มข้อมูล"
        subtitle="กรุณากรอกข้อมูล ชื่อ นามสกุล ที่อยู่ รถ ข้อมูลประกัน ให้ครบทุกช่อง"
        nextButtonText="ถัดไป"
        backButtonText="ย้อนกลับ">
      <tab-content title="ข้อมูลลูกค้า">
        <customer-component :items="customer" :value="{}" />
      </tab-content>
      <tab-content title="ที่อยู่">
        <address-component :items="address" />
      </tab-content>
      <tab-content title="รถ">
        <car-component :items="car" />
      </tab-content>
      <tab-content title="พ.ร.บ.">
        step 1
      </tab-content>
    </form-wizard>
  </div>
</template>

<script>
// Form
import CustomerComponent from '@/components/form/CustomerComponent'
import AddressComponent from '@/components/form/AddressComponent'
import CarComponent from '@/components/form/CarComponent'

let textBlocks = [30]
export default {
  components: {
    CustomerComponent,
    AddressComponent,
    CarComponent
  },

  data () {
    return {
      customer: {
        fields: [
          {
            name: 'username',
            label: 'ชื่อ',
            cleaveConfig: {
              blocks: textBlocks,
              onValueChanged: event => console.log(event.target.value)
            }
          }, {
            name: 'lastname',
            label: 'นามสกุล',
            cleaveConfig: {
              blocks: textBlocks,
              onValueChanged: event => console.log(event.target.value)
            }
          }, {
            name: 'idcard',
            label: 'รหัสบัตรประชาชน',
            cleaveConfig: {
              blocks: [1, 4, 2, 3, 2, 1],
              onValueChanged: event => console.log(event.target.value)
            }
          }, {
            name: 'phone',
            label: 'เบอร์โทรศัพท์',
            cleaveConfig: {
              phone: true,
              phoneRegionCode: 'TH',
              onValueChanged: event => console.log(event.target.value)
            }
          },
        ]
      },
      address: {
        fields: [
          {name: 'district', label: 'ตำบล'},
          {name: 'amphoe', label: 'อำเภอ'},
          {name: 'province', label: 'จังหวัด'},
          {name: 'zipcode', label: 'รหัวไปรษณีย์'}
        ],
        onDataFill: data => console.log(data)
      },

      car: {
        fields: [
          {name: 'brand', label: 'ยี่ห้อ', cleaveConfig: {
            blocks: textBlocks,
            onValueChanged: event => console.log(event.target.value)
          }},
          {name: 'version', label: 'รุ่น', cleaveConfig:{
            blocks: textBlocks,
            onValueChanged: event => console.log(event.target.value)
          }},
          {name: 'year', label: 'ปีรถ (พ.ศ.)', cleaveConfig:{
            date: true,
            datePattern: ['d', 'm', 'Y'],
            onValueChanged: event => console.log(event.target.value)
          }},
          {name: 'cc', label: 'ขนาดเครื่องยนต์ (cc)', cleaveConfig:{
            blocks: [4],
            onValueChanged: event => console.log(event.target.value)
          }},
          {name: 'color', label: 'สีรถ', cleaveConfig:{
            blocks: [4],
            onValueChanged: event => console.log(event.target.value)
          }}
        ]
      },

      insurance: {
        fields: [
          {name: 'pragranExpire', label: 'วันหมดประกัน'},
          {name: 'grommatanExpire', label: 'วันหมดกรมธรรม์'},
          {name: 'paseeExpire', label: 'วันหมดภาษี'},
        ]
      }
    }
  }
}
</script>

<style>

</style>
