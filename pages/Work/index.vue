<template>
  <div>
		<!-- <customer-component :apply="apply" /> -->
		<!-- <car-component :apply="apply" /> -->
    <!-- <keep-alive>
			<component :is="collect_a[0]" :apply="apply"></component>
	</keep-alive> -->
	<!-- <input type="text"  name="email" v-validate="'required|email'"> <span> {{errors.first('email')}} </span>
	<input type="password" name="password" v-validate="'required|min:6'"> <span>{{errors.first('password')}}</span> -->
	<no-ssr>
		<div class="field">
			<label class="label">name</label>
			<p class="control has-icons-left">
			<input type="text" v-validate="'required|email'" name="name" class="input is-large">
			<span class="icon is-left is-small">
				<i class="fas fa-user"></i>
			</span>
			</p>
			<p> <span>{{errors.first('name')}}</span> </p>
		</div>

		<div class="field">
			<label class="label">password</label>
			<p class="control has-icons-left">
				<input type="password" v-validate="'required|min:8'" name="password" class="input is-large">
				<span class="icon is-left">
					<i class="fas fa-key"></i>
				</span>
			</p>
			<p> {{errors.first('password')}} </p>
		</div>
	</no-ssr>
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
