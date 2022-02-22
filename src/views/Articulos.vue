<template>
  <div>
    <header-page></header-page>
    <section
      style="
        background-color: #212529;
        display: flex;
        align-items: center;
        flex-direction: column;
      "
    >
      <!--Carrusel-->
      <div class="carousel-container">
        <div class="carousel-inner">
          <div class="track">
            <div
              v-for="categoria in categorias"
              :key="categoria.id"
              class="card-container"
            >
              <div
                class="card"
                @click="$router.push('/articulos/category=' + categoria.id)"
              >
                <div class="img">hola</div>
                <div class="info">{{ categoria.name }}</div>
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
          @click.prevent="getDataPagina(1)"
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
            v-model="buscador"
          />
          <div class="invalid-feedback" data-sb-feedback="name:required">
            A name is required.
          </div>
        </div>
      </form>
      <div class="filtros">
        <div style="display: flex; align-item: center; color: white">
          <p>Filtros:</p>
        </div>
        <div class="btn-group">
          <button
            class="btn btn-primary dropdown-toggle"
            type="button"
            id="btn-price-filter"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            Precio
          </button>
          <div class="dropdown-menu" style="width: 320px">
           <form
              class="px-4 py-3"
              @submit.prevent="getDataPagina(1)"
              @reset="resetPrice"
            >
              <div class="form-outline mb-4">
                <input
                  v-model="rangePrice[0]"
                  type="number"
                  id="form2Example1"
                  class="form-control"
                  step="0.01"
                />
                <label class="form-label" for="form2Example1">Desde</label>
              </div>

              <div class="form-outline mb-4">
                <input
                  v-model="rangePrice[1]"
                  type="number"
                  id="form2Example2"
                  class="form-control"
                  step="0.01"
                />
                <label class="form-label" for="form2Example2">Hasta</label>
              </div>

              <!-- Submit button -->
              <button type="submit" class="btn btn-primary btn-block">
                Aplicar
              </button>
              <button type="reset" class="btn btn-danger btn-block">
                Quitar
              </button>
            </form>
          </div>
        </div>
        <div class="btn-group">
          <button
            class="btn btn-primary dropdown-toggle"
            type="button"
            id="btn-tag-filter"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            Etiquetas
          </button>
          <div class="dropdown-menu" style="width: 320px">
            <form
              class="px-4 py-3"
              @submit.prevent="getDataPagina(1)"
              @reset="resetTag"
            >
              <div v-for="etiqueta in etiquetas" :key="etiqueta.id">
                <input
                  v-model="etiquetaId"
                  type="radio"
                  name="etiqueta"
                  :value="etiqueta.id"
                />
                <label for="etiqueta">{{ etiqueta.name }}</label>
              </div>

              <!-- Submit button -->
              <button type="submit" class="btn btn-primary btn-block">
                Aplicar
              </button>
              <button type="reset" class="btn btn-danger btn-block">
                Quitar
              </button>
            </form>
          </div>
        </div>
        <div class="btn-group">
          <button
            class="btn btn-primary dropdown-toggle"
            type="button"
            id="btn-distance-filter"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            Distancia
          </button>
          <div class="dropdown-menu" style="width: 320px">
            <form
              class="px-4 py-3"
              @submit.prevent="getDataPagina(1)"
              @reset="resetDistance"
            >
              <div>
                <GoogleMap v-on:sendLocation="saveLocation" />
                <label for="distancia" class="form-label"
                  >Distancia (km)
                </label>
                <input
                  type="number"
                  v-model="distancia"
                  id="distancia"
                  class="form-control"
                  step="0.01"
                />
              </div>

              <!-- Submit button -->
              <button type="submit" class="btn btn-primary btn-block">
                Aplicar
              </button>
              <button type="reset" class="btn btn-danger btn-block">
                Quitar
              </button>
            </form>
          </div>
        </div>
      </div>

      <!--

      <div class="dropdown">
        <button
          class="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button: {{ value1 }}
        </button>
        <ul
          class="dropdown-menu"
          aria-labelledby="dropdownMenuButton1"
          role="menu"
        >
          <li class="dropdown-item">
            <form>
              <div>
                <form>
                  <vue-slider v-model="value"></vue-slider>
                </form>
                <div class="form-group">
                  <label>Desde</label>
                  <input
                    v-model="value[0]"
                    class="form-control"
                    type="number"
                    min="0"
                    max="20000"
                  />
                </div>
                <div class="form-group">
                  <label>Hasta</label>
                  <input
                    v-model="value[1]"
                    class="form-control"
                    type="number"
                    min="0"
                    max="20000"
                  />
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Aplicar</button>
            </form>
          </li>
        </ul>
      </div>
      -->
    </section>
    <!--Barra busqueda-->

    <section class="page-section bg-light" id="portfolio">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">{{ nomCategoria }}</h2>
          <h3 class="section-subheading text-muted">
            {{ descriptionCategoria }}
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
import GoogleMap from "../components/GoogleMap.vue";
/*
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/material.css";
*/
import api from "../api";
export default {
  name: "articulos",
  props: ["id"],
  components: { ProductoVue, HeaderPage, GoogleMap },
  data() {
    return {
      articulos: [],
      paginaActual: 1,
      categoriaFiltrado: "",
      buscador: "",
      value: [],
      options: ["A", "B", "C"],
      value1: "B",
      rangePrice: [],
      etiquetaId: 0,
      distancia: 0,
      longitud: 0,
      latitud: 0,
    };
  },
  methods: {
    getDataPagina(numPagina) {
      this.paginaActual = numPagina;
      api.articulos
        .getPerPage(numPagina, this.filtro)
        .then((response) => (this.articulos = response.data.data))
        .catch((error) => alert(error));
      this.changeColorButtonPrice();
      this.changeColorButtonTag();
      this.changeColorButtonDistance();
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
    isEmptyPrice() {
      return this.rangePrice.length == 0;
    },
    isActiveCategory(index) {
      return index == 1 ? "active" : " ";
    },
    resetPrice() {
      this.rangePrice = [];
      this.getDataPagina(1);
    },
    resetTag() {
      this.etiquetaId = 0;
      this.getDataPagina(1);
    },
    resetDistance() {
      this.distancia = 0;
      this.latitud = 0;
      this.longitud = 0;
      this.getDataPagina(1);
    },
    changeColorButtonPrice() {
      if (!this.rangePrice.length) {
        document
          .getElementById("btn-price-filter")
          .classList.add("btn-primary");
        document
          .getElementById("btn-price-filter")
          .classList.remove("btn-warning");
      } else {
        document
          .getElementById("btn-price-filter")
          .classList.add("btn-warning");
        document
          .getElementById("btn-price-filter")
          .classList.remove("btn-primary");
      }
    },
    changeColorButtonTag() {
      if (!this.etiquetaId) {
        document.getElementById("btn-tag-filter").classList.add("btn-primary");
        document
          .getElementById("btn-tag-filter")
          .classList.remove("btn-warning");
      } else {
        document.getElementById("btn-tag-filter").classList.add("btn-warning");
        document
          .getElementById("btn-tag-filter")
          .classList.remove("btn-primary");
      }
    },
    changeColorButtonDistance() {
      if (!this.latitud || !this.longitud || !this.distancia) {
        document
          .getElementById("btn-distance-filter")
          .classList.add("btn-primary");
        document
          .getElementById("btn-distance-filter")
          .classList.remove("btn-warning");
      } else {
        document
          .getElementById("btn-distance-filter")
          .classList.add("btn-warning");
        document
          .getElementById("btn-distance-filter")
          .classList.remove("btn-primary");
      }
    },
    saveLocation(location) {
      this.latitud = location.lat;
      this.longitud = location.lng;
    },
  },
  mounted() {
    this.getDataPagina(1);
  },

  computed: {
    categorias() {
      return this.$store.state.categorias;
    },
    etiquetas() {
      return this.$store.state.tags;
    },
    filtro() {
      let tmpFiltro = "";
      if (this.id) {
        tmpFiltro = "category_id=" + this.id;
      }
      if (this.buscador) {
        if (tmpFiltro) tmpFiltro += "&";
        tmpFiltro += "name=" + this.buscador;
      }
      if (this.rangePrice.length != 0) {
        if (tmpFiltro) tmpFiltro += "&";
        tmpFiltro +=
          "price1=" + this.rangePrice[0] + "&price2=" + this.rangePrice[1];
      }
      if (this.etiquetaId) {
        if (tmpFiltro) tmpFiltro += "&";
        tmpFiltro += "tag_id=" + this.etiquetaId;
      }
      if (this.latitud && this.longitud && this.distancia) {
        if (tmpFiltro) tmpFiltro += "&";
        tmpFiltro +=
          "latitud=" +
          this.latitud +
          "&longitud=" +
          this.longitud +
          "&distancia=" +
          this.distancia;
      }
      return tmpFiltro;
    },
    nomCategoria() {
      return this.$store.getters.nomCategoryById(this.id);
    },
    descriptionCategoria() {
      return this.$store.getters.descriptionCategoryById(this.id);
    },
  },
  watch: {
    $route() {
      this.getDataPagina(1);
    },
  },
};
</script>

<style scoped>
.filtros {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
}

.filtros > * {
  margin-left: 15px;
}
</style>