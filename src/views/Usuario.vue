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
                    <li v-for="(star,index) in user.valoration" :key="index">
                        <i
                          class="bi bi-star-fill"
                          style="color: #f3da35; font-size: 25px"
                        ></i>
                      </li> 
                      <li v-for="cowStar in user.valoration" :key="cowStar">
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
          <button @click="ocultarDiv(2,1,3)" type="button" class="btn btn-outline-warning">
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
          <form id="contactForm" @submit.prevent="newValoratio" data-sb-form-api-token="API_TOKEN">
              <div class="row down-content portfolio-caption">
                  <div class="col-12" style="display: flex; flex-direction: row;">
                      <div class="col-12">
                          <div class="row text-center" style="flex-direction: column; display: flex;">
                                  <p class="clasificacion">
                                    <input id="radio1" type="radio" name="estrellas" value="5" v-model="newValoracion.stars"><!--
                                    --><label for="radio1" style="font-size:25px;">★</label><!--
                                    --><input id="radio2" type="radio" name="estrellas" value="4" v-model="newValoracion.stars"><!--
                                    --><label for="radio2" style="font-size:25px;">★</label><!--
                                    --><input id="radio3" type="radio" name="estrellas" value="3" v-model="newValoracion.stars"><!--
                                    --><label for="radio3" style="font-size:25px;">★</label><!--
                                    --><input id="radio4" type="radio" name="estrellas" value="2" v-model="newValoracion.stars"><!--
                                    --><label for="radio4" style="font-size:25px;">★</label><!--
                                    --><input id="radio5" type="radio" name="estrellas" required value="1" v-model="newValoracion.stars"><!--
                                    --><label style="font-size:25px;" for="radio5">★</label>
                                  </p>
                               </div>
                      </div>
                  </div>
            </div> 
            <div class="row align-items-stretch mb-5" style="display: flex; justify-content: center;">
                <div class="col-md-9">
                    <div class="form-group form-group-textarea mb-md-0">
                            <!-- Message input-->
                        <textarea class="form-control" v-model="newValoracion.commentary" id="message" placeholder="Your Message" style=" resize: none;" ></textarea>
                        <div class="invalid-feedback">A message is required.</div>
                    </div>
                </div>
            </div>
            <div class="text-center"><button class="btn btn-outline-warning btn-xl text-uppercase" id="submitButton" type="submit">Send Message</button></div>
        </form>
    </div>
    <div id="view-2" class="ocultar">
          <div class="text-center">
              <h2 class="section-heading text-uppercase">Opioniones</h2>
              <h3 class="section-subheading text-muted">Que opinarán el resto de suarios sobre {{user.name}} ?</h3>
          </div>
          <div style="display: flex;justify-content: center;flex-direction: column;margin-bottom: 25px;align-items: center;">
          <div v-for="valoracion in user.valorationsUser" :key="valoracion.id" class="col-9" style="display: flex; flex-direction: row; background-color:#dbdbdb; border-radius:15px;margin-top:15px">
            <div class="col-lg-1 col-md-2 col-sm-3 col-4">
              <div style="margin-left:14px; margin-top:5px">
                <img
                  class="img-fluid"
                  style="border-radius:5px; "
                  src="@/assets/img/portfolio/1.jpg"
                  alt="..."
                />
                <p>{{valoracion[1]}}</p>
              </div>  
            </div> 
            <div
              class="col-lg-11 col-md-10 col-sm-9 col-8"
              style="margin-left: 10px;"
            >
              <p>
                {{valoracion[0]}}
              </p>
            </div> 
          </div> 
        </div> 
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
      user: { valoration: 0 },
      articulos: {},
      paginaActual: 1,
      newValoracion:{id_user_emissor:4,id_user_receptor:this.id},
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
    newValoratio(){
      api.valoracion
        .create(this.newValoracion)
        .catch(error => alert(error))
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
#form {
  width: 250px;
  margin: 0 auto;
  height: 50px;
}

#form p {
  text-align: center;
}

#form label {
  font-size: 20px;
}

input[type="radio"] {
  display: none;
}

label {
  color: grey;
}

.clasificacion {
  direction: rtl;
  unicode-bidi: bidi-override;
}

label:hover,
label:hover ~ label {
  color: orange;
}

input[type="radio"]:checked ~ label {
  color: orange;
}
</style>