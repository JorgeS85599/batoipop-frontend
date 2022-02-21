<template>
  <section class="page-section bg-light" id="portfolio">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">{{ user.name }}</h2>
      </div>
      <div class="row" style="display: flex; justify-content: center">
        <div class="col-md-6">
          <div class="product-item portfolio-item">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="img-fluid"
                    src="../assets/img/portfolio/1.jpg"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div class="row down-content portfolio-caption">
              <div class="col-12" style="display: flex; flex-direction: row">
                <div class="col-12">
                  <div
                    class="row"
                    style="display: flex; justify-content: flex-start"
                  >
                    <p class="portfolio-caption-heading">Puntuación</p>
                    <ul class="stars">
                      <li v-for="star in user.valoration" :key="star">
                        <i
                          class="bi bi-star-fill"
                          style="color: #f3da35; font-size: 25px"
                        ></i>
                      </li>
                      <li v-for="cowStar in 5 - user.valoration" :key="cowStar">
                        <i
                          class="bi bi-star"
                          style="color: #f3da35; font-size: 25px"
                        ></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-section">
      <div class="container" style="display: flex; margin-bottom: 25px">
        <div style="margin-right: 5px">
          <button @click="ocultarDiv(1,3,2)" type="button" class="btn btn-outline-warning">
            Productos en venta
          </button>
        </div>
        <div style="margin-right: 5px">
          <button type="button" class="btn btn-outline-warning">
            Comentarios
          </button>
        </div>
        <div style="margin-right: 5px">
          <button @click="ocultarDiv(3,1,2)" type="button" class="btn btn-outline-warning">Valorar</button>
        </div>
      </div>
      <div id="view-1" class="ocultar">
        <div class="page-section bg-light" id="portfolio">
            <div class="container">
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
        </div>
     </div>
         <div id="view-3" class="ocultar">
        <div class="text-center">
            <h2 class="section-heading text-uppercase">Valora a este Usuario</h2>
            <h3 class="section-subheading text-muted">Tu opinión es muy importante para la comunidad</h3>
        </div>
        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
            <div class="row down-content portfolio-caption">
                <div class="col-12" style="display: flex; flex-direction: row;">
                    <div class="col-12">
                        <div class="row text-center" style="flex-direction: column; display: flex;">
                            <div style="display: flex; justify-content: center;"> 
                                <ul class=" stars" style="list-style:none; display: flex; flex-direction: row; padding-left: 0;">
                                    <li><i class="fa fa-star" style='color: #f3da35; font-size: 30px;'></i></li>
                                    <li><i class="fa fa-star" style='color: #f3da35; font-size: 30px;'></i></li>
                                    <li><i class="fa fa-star" style='color: #f3da35; font-size: 30px;'></i></li>
                                    <li><i class="fa fa-star" style='color: #f3da35; font-size: 30px;'></i></li>
                                    <li><i class="fa fa-star" style='color: #f3da35; font-size: 30px;'></i></li>
                                </ul>
                            </div>    
                        </div>
                    </div>
                </div>
            </div> 
            <div class="row align-items-stretch mb-5" style="display: flex; justify-content: center;">
                <div class="col-md-9">
                    <div class="form-group form-group-textarea mb-md-0">
                            <!-- Message input-->
                        <textarea class="form-control" id="message" placeholder="Your Message" style=" resize: none;" data-sb-validations="required"></textarea>
                        <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                    </div>
                </div>
            </div>
                    <!-- Submit success message-->
                    <!---->
                    <!-- This is what your users will see when the form-->
                    <!-- has successfully submitted-->
            <div class="d-none" id="submitSuccessMessage">
                <div class="text-center text-white mb-3">
                    <div class="fw-bolder">Form submission successful!</div>
                       To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                </div>
            </div>
                <!-- Submit error message-->
                <!---->
                <!-- This is what your users will see when there is-->                    
                <!-- an error submitting the form-->
            <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                <!-- Submit Button-->
            <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
        </form>
    </div>
    </div>
  </section>
</template>

<script>
import ProductoVue from "../components/ProductoVue.vue";
import api from "../api";
export default {
  props: ["id"],
  components: { ProductoVue },
  data() {
    return {
      user: [],
      articulos: [],
      paginaActual: 1,
    };
  },
  methods: {
    ocultarDiv(id1,id2,id3){
        document.querySelector('#view-'+id1).classList.remove('ocultar')
        document.querySelector('#view-'+id2).classList.add('ocultar')
        document.querySelector('#view-'+id3).classList.add('ocultar')
    },
    getDataUserPagina(numPagina) {
      this.paginaActual = numPagina;
      api.articulos
        .getArticleUserPerPage(numPagina, this.id)
        .then((response) => (this.articulos = response.data))
        .catch((error) => alert(error));
    },
    getPreviousPage() {
      if (this.paginaActual > 1) {
        this.paginaActual--;
      }
      this.getDataUserPagina(this.paginaActual);
    },
    getNextPage() {
      if (this.paginaActual < this.articulos.last_page) {
        this.paginaActual++;
      }
      this.getDataUserPagina(this.paginaActual);
    },
    isActivePage(numPagina) {
      return numPagina == this.paginaActual ? "active" : "";
    },
    isActiveCategory(index) {
      return index == 1 ? "active" : " ";
    },
  },
  mounted() {
    this.getDataUserPagina(1)
    api.usuarios
      .getOne(this.id)
      .then((response) => (this.user = response.data))
      .catch((error) => alert(error));
  },
  computed: {
    categorias() {
      return this.$store.state.categorias;
    },
  },
};
</script>

<style>
.ocultar{
    display: none;
}
</style>