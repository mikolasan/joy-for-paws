<script setup>
import Main from './components/Main.vue'
import Cats from './components/Cats.vue'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
</script>

<script>
export default {
  data() {
    return {
      page: 'main'
    }
  }
}
</script>

<template>
  <Nav />
  <body>
    <Main v-if="page === 'main'"/>
    <Cats v-if="page === 'adopt'"/>
  </body>
  <Footer />
</template>