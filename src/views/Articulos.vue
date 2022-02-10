<template>
  <div>
    <header-page></header-page>
    <section  style="background-color: #212529;display: flex; align-items: center;flex-direction: column;"> 
      <!--Carrusel-->
      <div class="carousel-container">
        <div class="carousel-inner">
          <div class="track">
            <div 
            v-for="categoria in categorias"
            :key="categoria.id"
            class="card-container">
              <div class="card">
                <div class="img">1</div>
                <div class="info">{{categoria.name}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="nav">
          <button class="prev">
            <i class="material-icons"> keyboard_arrow_left </i>
          </button>
          <button class="next">
            <i class="material-icons"> keyboard_arrow_right </i>
          </button>
        </div>
      </div>
      <!--Carrusel-->
      <!--Barra busqueda-->
      <form
        class="col-lg-5 col-md-7 col-sm-9 col-11"
        style="display: flex; height: 50px"
      >
        <button
          class="delete btn btn-secondary col-lg-1 col-md-1 col-sm-2 col-2"
          style="background-color: #ffc800"
        >
          <i class="bi bi-search"></i>
        </button>
        <div
          class="form-group col-lg-11 col-md-11 col-sm-10 col-10"
          style="height: 100%"
        >
          <!-- Name input-->
          <input
            class="form-control"
            style="height: 100%"
            id="name"
            type="text"
            placeholder="Your Name or Email"
            data-sb-validations="required"
          />
          <div class="invalid-feedback" data-sb-feedback="name:required">
            A name is required.
          </div>
        </div>
      </form>
    </section>
    <!--Barra busqueda-->

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
              v-bind:class="isActivePage(pagina)"
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
  </div>
</template>

<script>
import ProductoVue from "../components/ProductoVue.vue";
import HeaderPage from "../components/HeaderPage.vue";
import api from "../api";
export default {
  name: "articulos",
  components: { ProductoVue, HeaderPage },
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
    isActivePage(numPagina) {
      return numPagina == this.paginaActual ? "active" : "";
    },
    isActiveCategory(index) {
      return index == 1 ? "active" : " ";
    },
  },
  mounted() {
    api.articulos
      .getPerPage(1)
      .then((response) => (this.articulos = response.data))
      .catch((error) => alert(error));
  },
  computed: {
    categorias() {
      return this.$store.state.categorias;
    },
  },
};
</script>

<style scoped>
</style>