<template>
  <div id="navigator" class="has-text-centered">
    <nuxt-link class="navigator-item" to="/">
      <span style="font-size: 3em; color: Tomato;">
        <i class="fas fa-database"></i>
      </span> <br>
      ข้อมูล
    </nuxt-link>
    <nuxt-link class="navigator-item" to="/">
      <span style="font-size: 3em; color: Tomato;">
        <i class="fas fa-plus"></i>
      </span> <br>
      เพิ่มข้อมูล
    </nuxt-link>
    <nuxt-link class="navigator-item" to="/">
      <span style="font-size: 3em; color: Tomato;">
        <i class="fas fa-user-tie"></i>
      </span> <br>
      ข้อมูลลูกค้า
    </nuxt-link>
    <nuxt-link class="navigator-item" to="/">
      <span style="font-size: 3em; color: Tomato;">
        <i class="fas fa-search"></i>
      </span> <br>
      ค้นหา
    </nuxt-link>

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