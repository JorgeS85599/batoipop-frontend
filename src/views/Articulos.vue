<template>
  <section class="page-section bg-light" id="portfolio">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Portfolio</h2>
        <h3 class="section-subheading text-muted">
          Lorem ipsum dolor sit amet consectetur.
        </h3>
      </div>
      <div class="row">
        <producto-vue
          v-for="articulo in articulos.data"
          :key="articulo.id"
          :articulo="articulo"
        ></producto-vue>
      </div>
    </div>
    <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li v-on:click="getPreviousPage()" class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Anterior</span>
            </a>
          </li>
          <li
            v-for="pagina in articulos.last_page"
            :key="pagina"
            v-on:click="getDataPagina(pagina)"
            v-bind:class="isActive(pagina)"
            class="page-item"
          >
            <a class="page-link" href="#">{{ pagina }}</a>
          </li>
          <li v-on:click="getNextPage()" class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Siguiente</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
import ProductoVue from "../components/ProductoVue.vue";
import api from "../api";
export default {
  name: "articulos",
  components: { ProductoVue },
  data() {
    return {
      articulos: [],
      paginaActual: 1,
    };
  },
  methods: {
    getDataPagina(numPagina) {
      this.paginaActual = numPagina;
      api.articulos
        .getPerPage(numPagina)
        .then((response) => (this.articulos = response.data))
        .catch((error) => alert(error));
    },
    getPreviousPage() {
      if (this.paginaActual > 1) {
        this.paginaActual--;
      }
      this.getDataPagina(this.paginaActual);
    },
    getNextPage() {
      if (this.paginaActual < this.articulos.last_page) {
        this.paginaActual++;
      }
      this.getDataPagina(this.paginaActual);
    },
    isActive(numPagina) {
      return numPagina == this.paginaActual ? 'active':''
    }
  },
  mounted() {
    api.articulos
      .getPerPage(1)
      .then((response) => (this.articulos = response.data))
      .catch((error) => alert(error));
  },
};
</script>

<style scoped>
</style>