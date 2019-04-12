<template>
  <div id="phone">
    <app-header></app-header>
    <app-nav></app-nav>
  </div>
</template>

<script>
import Header from './Header.vue'
import Nav from './Nav.vue'





export default {
  name: 'Phone',
  components: {
    appHeader:Header,
    appNav:Nav
  }
}
</script>

<style>

</style>
