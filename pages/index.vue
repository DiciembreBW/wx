<template>
  <div id="navigator" class="has-text-centered">
    <nuxt-link class="navigator-item" to="/item">
      <span style="font-size: 3em; color: Tomato;">
        <i class="fas fa-database"></i>
      </span> <br>
      ข้อมูล
    </nuxt-link>
    <nuxt-link class="navigator-item" to="/addItemPage">
      <span style="font-size: 3em; color: Tomato;">
        <i class="fas fa-plus"></i>
      </span> <br>
      เพิ่มข้อมูล
    </nuxt-link>
    <nuxt-link class="navigator-item" to="/CustomerPage">
      <span style="font-size: 3em; color: Tomato;">
        <i class="fas fa-user-tie"></i>
      </span> <br>
      ข้อมูลลูกค้า
    </nuxt-link>
    <nuxt-link class="navigator-item" to="/car">
      <span style="font-size: 3em; color: Tomato;">
        <i class="fas fa-car"></i>
      </span> <br>
      ค้นหา
    </nuxt-link>

    <hr>
    <div class="items">
      <nuxt-link to="color" class="button is-light">
        สี
      </nuxt-link>
      <nuxt-link to="prb" class="button is-light">
        พ.ร.บ.
      </nuxt-link>
      <nuxt-link to="corp" class="button is-light">
        บริษัทประกันภัย
      </nuxt-link>
    </div>

  </div>
</template>

<style scoped>
#navigator {
  /* background-color: red; */
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}

#navigator > .navigator-item {
  /* width: 25%; */
  width: 200px;
  padding:  100px 0;
  /* height: 25%; */
  /* border: 1px solid black; */
  border-radius: 4px;
  margin: 4px;
  /* text-align: center; */
}

.navigator-item {
  color: black;
  font-size: 1.5em;
}
.navigator-item:hover {
  background-color: #E5E5E5;
  color: tomato;
}

</style>