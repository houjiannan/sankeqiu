<template>
  <div id="home">
    <app-header></app-header>
    <app-nav></app-nav>
    <app-content></app-content>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './Header.vue'
import Nav from './Nav.vue'
import Content from './Content.vue'
import Footer from './Footer.vue'




export default {
  name: 'Home',
  components: {
    appHeader:Header,
    appNav:Nav,
    appContent:Content,
    appFooter:Footer
  }
}
</script>

<style>

</style>
