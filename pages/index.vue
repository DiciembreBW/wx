<template>
<div class="row">
  <div class="col s12 l5">
    <a-side />
  </div>

  <div class="col s12 l7">
    <index-comp />

    <!-- <div class="row">
  <div class="input-field col s10">
    <i class="material-icons prefix">search</i>
    <input id="icon_telephone" type="text" class="validate">
    <label for="icon_telephone">ค้นหา</label>
  </div>
  <div class="input-field col s2">
    <i class="material-icons prefix">list</i>
  </div>
</div>

  <div class="row">
    <paginate-links class="pagination" for="i"></paginate-links> 
  </div>

  <paginate
    name= 'i'
    :list="item"
    :per=8 
    class="row" id="items">

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

  <div class="row">
    <paginate-links class="pagination" for="i"></paginate-links> 
  </div> -->

  </div>
</div>
</template>

<script>
import ASide from '@/components/aside.vue'
import IndexComp from '@/components/IndexComponent.vue'

export default {
  components: {ASide, IndexComp},
  data () {
    return { }
  }
}
</script>
