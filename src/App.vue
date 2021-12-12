<template>
  <div id="app">
    <nav>
      <router-link to="/">HelloWorld</router-link>
      <router-link to="Three">Three</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  overflow: hidden;
}

img{
  max-width: 300px;
  margin: 50px auto;
  display: block;
}
</style>
