<template>
  <Nav :page="page" />
  <body>
    <slot></slot>
  </body>
  <Footer />
</template>

<script setup>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
const props = defineProps({
  page: String
})
</script>