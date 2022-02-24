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
                    <li
                          v-for="(star,index) in user.valoration"
                          :key="'st'+index"
                        >
                        <i
                          class="bi bi-star-fill"
                          style="color: #f3da35; font-size: 25px"
                        ></i>
                      </li> 
                      <li v-for="(cowStar,index) in 5 - user.valoration"
                          :key="index">
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
          <button @click="ocultarDiv(1,3,2,4)" type="button" class="btn btn-outline-warning">
            Productos
          </button>
        </div>
        <div style="margin-right: 5px">
          <button @click="ocultarDiv(2,1,3,4)" type="button" class="btn btn-outline-warning">
            Comentarios
          </button>
        </div>
        <div v-if="id == $store.state.user.id" style="margin-right: 5px">
          <button @click="ocultarDiv(4,1,2,3)" type="button" class="btn btn-outline-warning">Comprados</button>
        </div>
        <div style="margin-right: 5px">
          <button @click="ocultarDiv(3,1,2,4)" type="button" class="btn btn-outline-warning">Valorar</button>
        </div>
        <div style="margin-right: 5px">
          <button @click="ocultarDiv(5,1,3,2,4)" type="button" class="btn btn-outline-warning">Ofertas</button>
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
     <div id="view-4" class="ocultar">
        <div class="page-section bg-light" id="portfolio">
            <div class="container">
            <div class="row">
                <producto-vue
                v-for="articuloBuy in articulosBuy.data"
                :key="articuloBuy.id"
                :articulo="articuloBuy"
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
                    v-for="pagina in articulosBuy.last_page"
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
            <div class="col-lg-2 col-md-2 col-sm-3 col-4">
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
              class="col-lg-10 col-md-10 col-sm-9 col-8"
              style="margin-left: 10px;"
            >
              <p>
                {{valoracion[0]}}
              </p>
            </div> 
          </div> 
        </div> 
    </div>










      <!-------------------------------->
      <div class="container">
        <div
            style="display: flex; justify-content: center; margin-bottom: 25px"
        >
          <div v-for="message in this.messages" :key="message.id" class="col-9" style="display: flex; flex-direction: row">
            <div class="col-lg-1 col-md-2 col-sm-3 col-4">
              <!-- User photo-->
              <img
                  class="img-fluid"
                  src="@/assets/img/portfolio/1.jpg"
                  alt="..."
              />
              <p>{{message.usuarioEmisor}}</p>
            </div>
            <div
                class="col-lg-11 col-md-10 col-sm-9 col-8"
                style="margin-left: 10px"
            >
              <p>{{message.message}}</p>
              <p >Articulo :  <a class="portfolio-link" data-bs-toggle="modal" @click="goTo('/articulo/' + message.articulo.id)">{{message.articulo.name}}</a> </p>

              <button  type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModalR" @click="acceptBuy.article = message.articulo.id; acceptBuy.user = message.id_user.id;acceptOfert() " >
                Acceptar Oferta
              </button>
            </div>
          </div>

          <div class="modal fade" id="exampleModalR" tabindex="-1" aria-labelledby="exampleModalLabelR" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">

                <div v-if="this.$store.getters.isAuthenticated">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Valorar Usuario</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <ValidationObserver v-slot="{ handleSubmit }">
                    <form @submit.prevent="handleSubmit(reportMessage)">
                      <div class="modal-body">

                        <div class="form-group form-group-textarea mb-md-0">
                          <validation-provider
                              rules="required|min:5|max:150"
                              v-slot="{ errors }"
                          >
                            <label>comentario </label>
                            <textarea
                                class="form-control"
                                placeholder="Your Message"
                                style="resize: none"
                                v-model="reportM.reportComent"
                                name="comentario"
                            ></textarea>
                            <span class="text-danger">{{ errors[0] }}</span>
                          </validation-provider>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                      </div>
                    </form>
                  </ValidationObserver>
                </div>
                <div v-else>
                  <h2>Tienes que estar login para relizar esta acción</h2>
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ValidationObserver v-slot="{ handleSubmit }">
          <form
              id="contactForm"
              data-sb-form-api-token="API_TOKEN"
              @submit.prevent="handleSubmit(saveMensaje)"
          >
            <div
                class="row align-items-stretch mb-5"
                style="display: flex; justify-content: center"
            >
              <div class="col-md-9">
                <div class="form-group form-group-textarea mb-md-0">
                  <!-- Message input-->
                  <validation-provider
                      rules="required|min:5|max:150"
                      v-slot="{ errors }"
                  >
                    <textarea
                        class="form-control"
                        id="message"
                        placeholder="Your Message"
                        style="resize: none"
                        data-sb-validations="required"
                        v-model="mensaje.message"
                    ></textarea>
                    <span class="text-danger">{{ errors[0] }}</span>
                  </validation-provider>
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
                <a href="https://startbootstrap.com/solution/contact-forms"
                >https://startbootstrap.com/solution/contact-forms</a
                >
              </div>
            </div>
            <!-- Submit error message-->
            <!---->
            <!-- This is what your users will see when there is-->
            <!-- an error submitting the form-->
            <div class="d-none" id="submitErrorMessage">
              <div class="text-center text-danger mb-3">
                Error sending message!
              </div>
            </div>
            <!-- Submit Button-->
            <div class="text-center">
              <button
                  class="btn btn-primary btn-xl text-uppercase"
                  id="submitButton"
                  type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </ValidationObserver>
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
      articulosBuy: {},
      paginaActual: 1,
      newValoracion:{id_user_emissor:4,id_user_receptor:this.id},
      messages: {},
      acceptBuy: {},
    };
  },
  methods: {
    
    ocultarDiv(id1,id2,id3,id4){
        document.querySelector('#view-'+id1).classList.remove('ocultar')
        document.querySelector('#view-'+id2).classList.add('ocultar')
        document.querySelector('#view-'+id3).classList.add('ocultar')
        document.querySelector('#view-'+id4).classList.add('ocultar')
    },
    getDataUserPagina(numPagina) {
      this.paginaActual = numPagina;
      api.articulos
        .getArticleUserPerPage(numPagina, this.id)
        .then((response) => (this.articulos = response.data.data))
        .catch((error) => alert(error));

      api.articulos
        .getArticleUserBuy(numPagina, this.id)
        .then((response) => (this.articulosBuy = response.data.data))
        .catch((error) => alert(error));

      api.mensajes.
      getMessageByUserBuy(this.id)
          .then((response) => (this.messages = response.data.data))
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
    acceptOfert(){
      console.log(this.acceptBuy)
      api.articulos.buyArticleFinal(this.acceptBuy)
      .then((response) => console.log(response))
      .catch((error)=> alert(error))
    },

    goTo(path) {
      this.$router.push(path);
    },

  },
  mounted() {
    this.getDataUserPagina(1)
    api.usuarios
      .getOne(this.id)
      .then((response) => (this.user = response.data))
      .catch((error) => console.log(error));
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