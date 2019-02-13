<template>
  <div>
		<!-- <customer-component :apply="apply" /> -->
		<car-component :apply="apply" />
    <!-- <keep-alive>
			<component :is="collect_a[0]" :next="next" :back="back"></component>
		</keep-alive> -->
  </div>
</template>

<script>
import CustomerComponent from '@/components/CustomerComponent'
import CarComponent from '@/components/CarComponent'

export default {
	components: {
		CustomerComponent,
		CarComponent
	},
	data () {
		return {}
	},
	methods:{
		apply: function (callback) {
			console.log(callback)
		}
	}
}

// import testFirestore from '@/plugins/boydPlugins'

// import step1 from '@/components/WorkComponents/step1'
// import step2 from '@/components/WorkComponents/step2'
// import step3 from '@/components/WorkComponents/step3'
// import step4 from '@/components/WorkComponents/step4'

// import Fuzzy from 'fuzzy'

// const cars = new testFirestore('cars')
// export default {
//   data() {
//     cars.onSnapshot().then(data => this.data = data)
//     return {
//       data: [],
//       collect_a: [step1, step2, step3],
//       collect_b: []
//     }
//   },

//   methods: {
//     back: function () {
//       this.collect_a.unshift(this.collect_b.shift())
//     },
//     next: function () {
//       this.collect_b.unshift(this.collect_a.shift())
//     },
//   }
// } 
</script>
