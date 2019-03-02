<template>
<div>

<div class="row">
  <div class="input-field col s10">
    <i class="material-icons prefix">search</i>
    <input id="icon_telephone" type="tel" class="validate">
    <label for="icon_telephone">ค้นหา</label>
  </div>
  <div class="input-field col s2">
    <i class="material-icons prefix">list</i>
  </div>
</div>

<!-- show item -->
  <!-- <div class="section" id="items">
      <div class="card col s12 m10 l4" v-for="(item, index) in 9" :key="index">
        <div class="card-image"></div>
        <div class="card-stacked">
          <div class="card-content" id="card-content">
            <h5>อรอุมา จันทร์เสน</h5>
            <ul>
              <li>Toyota Vios</li>
              <li>กค 3312  มุกดาหาร</li>
              <li>เทเวศประกันภัย</li>
            </ul>
          </div>
        </div>
      </div>
  </div> -->
  <paginate
    name= 'i'
    :list="item"
    :per=8 
    class="section" id="items">

    <div class="card horizontal col s12 l6" v-for="(item, index) in paginated('i')" :key="index" id="card-item">
      <div class="card-image"></div>
      <div class="card-stacked">
        <div class="card-content" id="card-content">
          <h6>
            <span v-if="item.firstname || item.lastname"> {{item.firstname}} {{item.lastname}}  </span>
            <span v-else>ยังไม่ได้กำหนดค่า</span>
          </h6>
          <ul>
            <li> <span v-if="item.brand || item.version">{{item.brand}} {{item.version}}</span> <span v-else>ยังไม่ได้กำหนดค่า</span> </li>
          </ul>
        </div>
      </div>
    </div>
  </paginate>
  <div class="section">
    <paginate-links class="pagination" for="i"></paginate-links>
  </div>
</div>

 
</template>

<script>
// import ItemOnIndexComponent from '@/components/ItemOnIndexComponent.vue'
import Firestore from '@/plugins/boydPlugins'
// import _ from 'lodash'

const item = new Firestore('cars')
// import fuse from 'fuse.js'

export default {
  // components: {ItemOnIndexComponent},
  data () {
    return {
      item: item.data,
      paginate: ['i'],
      text: '',
    }
  },

  // methods: {
  //   handle: function (event) {
  //     if(this.text) {
  //         this.item = new fuse(this.item, {keys: ['firstname', 'lastname']}).search(this.text)
  //     } else {
  //       item.onSnapshot().then(data => this.item = data)
  //     }
  //   }
  // }
}
</script>
