<template>
  <div class="col-md-4">
    <div class="product-item portfolio-item">
      <a class="portfolio-link" data-bs-toggle="modal" @click="goTo('/articulo/' + articulo.id)">
        <div class="portfolio-hover">
          <div class="portfolio-hover-content"><i class="bi bi-eye"></i></div>
        </div>
        <img class="img-fluid" src="@/assets/img/portfolio/1.jpg" alt="..." />
      </a>
      <div class="down-content portfolio-caption">
        <div class="portfolio-caption-heading">{{ articulo.name }}</div>
        <h6>{{ articulo.price }} €</h6>
        <p>{{ articulo.description }}</p>
        <span>Reviews (24)</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductoVue",
  props: ["articulo"],
  methods: {
    goTo(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
</style>