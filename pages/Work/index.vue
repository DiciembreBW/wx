<template>
  <div>
		<!-- <customer-component :apply="apply" /> -->
		<!-- <car-component :apply="apply" /> -->
    <keep-alive>
			<component :is="collect_a[0]" :apply="apply"></component>
	</keep-alive>
	<pre>
		{{value}}
	</pre>
  </div>
</template>

<script>
import CustomerComponent from '@/components/CustomerComponent'
import CarComponent from '@/components/CarComponent'
import PrbComponent from '@/components/PrbComponent'
import testFirestore from '@/plugins/boydPlugins'

let items = new testFirestore('items')

export default {
	components: {
		CustomerComponent,
		CarComponent,
		PrbComponent
	},
	data () {
		return {
			value: {},
			collect_a: [CustomerComponent, CarComponent, PrbComponent],
			collect_b: []
		}
	},

	methods:{
		apply: function (callback) {
			Object.assign(this.value, callback)

			this.collect_b.unshift(this.collect_a.shift())
			
			if (this.collect_a.length == 0) {
				this.$router.push('/')
			}
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
