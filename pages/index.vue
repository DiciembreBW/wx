<template>
  <div>
    <h1 class="title is-2">Index page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ea fuga recusandae quasi minus eveniet quas harum a. In ut labore hic mollitia ad expedita cupiditate delectus temporibus perspiciatis reiciendis.</p>
  </div>
</template>

<script>
export default {
  components: {
  },
  asyncData(context) {
    // use context
    context.app.test('Hello')
  }
}
</script>

<style>
</style>
