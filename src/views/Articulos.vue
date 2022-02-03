<template>
  <section class="page-section bg-light" id="portfolio">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Portfolio</h2>
        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      <div class="row">
        <producto-vue></producto-vue>
      </div>
    </div>
  </section>
</template>

<script>
import ProductoVue from '../components/ProductoVue.vue';
export default {
  name: "articulos",
  components: { ProductoVue },
  data() {
      return {
          articulos: []
      }
  }

}
</script>

<style scoped>

</style>