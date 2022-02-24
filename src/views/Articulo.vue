<template>
  <div>
    <header-page></header-page>
    
    <!-- Portfolio Grid-->
    <section class="page-section bg-light" id="portfolio">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">
            {{ this.articulo.name }}
          </h2>
          <h3 class="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="product-item portfolio-item">
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item" v-for="(photo,index) in this.articulo.photos" :key="photo.id" v-bind:class="index==0?'active':''">
                    <img
                      class="img-fluid"
                      :src="'http://batoipop.my/' + photo.image"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <div class="row down-content portfolio-caption">
                <div class="col-9" style="display: flex; flex-direction: row;background-color:#dbdbdb; border-radius:15px;">
                  <div class="col-6" style="display: flex; align-content:center ;padding: 8px;">
                    <img
                      class="img-fluid"
                      src="@/assets/img/portfolio/1.jpg"
                      alt="..."
                    />
                  </div>
                  <div class="col-6">
                    <div class="row " style="display: flex; justify-content: flex-start">
                      <p class="portfolio-caption-heading">
                        {{ this.articulo.owner.name }}
                      </p>
                      <ul class="stars">
                        <li
                          v-for="(star,index) in this.articulo.valoration"
                          :key="'st'+index"
                        >
                          <i class="bi bi-star-fill" style="color: #f3da35"></i>
                        </li>
                        <li
                          v-for="(cowStar,index) in 5 - this.articulo.valoration"
                          :key="index"
                        >
                          <i class="bi bi-star" style="color: #f3da35"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-3">
                  <h6>{{ this.articulo.price }} €</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <p>{{ this.articulo.description }}</p>
            <table class="table">
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Categoria</th>
                  <td>{{ this.articulo.category }}</td>
                </tr>
                <tr>
                  <th scope="row">Antiguedad</th>
                  <td>Casi nuevo</td>
                </tr>
                <tr>
                  <th scope="row">Etiquetas</th>
                  <td>{{ this.getTagsName() }}</td>
                </tr>
                <tr>
                  <th scope="row">Ubicación</th>
                  <td>Puerto Real</td>
                </tr>
              <tr>
                <td>
                  <!-- Button trigger modal -->
                  <button  type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Reportar
                  </button>

                  <!-- Modal -->
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabelR" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">

                        <div v-if="this.$store.getters.isAuthenticated">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabelR">Reportar</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <ValidationObserver v-slot="{ handleSubmit }">
                            <form @submit.prevent="handleSubmit(reportArticle)">
                              <div class="modal-body">

                                <div class="form-group form-group-textarea mb-md-0">
                                  <validation-provider
                                      rules="min:5|max:150"
                                      v-slot="{ errors }"
                                  >
                                    <label>comentario opcional</label>
                                    <textarea
                                        class="form-control"
                                        placeholder="Your Message"
                                        style="resize: none"
                                        v-model="reportA.reportComent"
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
                </td>
                <td>
                  <button  type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                    comprar
                  </button>

                  <!-- Modal -->
                  <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">

                        <div v-if="this.$store.getters.isAuthenticated">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel2">Comprar</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <ValidationObserver v-slot="{ handleSubmit }">
                            <form @submit.prevent="handleSubmit(buyArticle)">
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
                                        v-model="messageBuy.message"
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
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <section class="page-section">
      <div>
          <GoogleMap :latitud="this.articulo.latitud" :longitud="this.articulo.longitud"/>
      </div>
    </section>
    <section class="page-section">
      <div class="container">
        <div
          style="display: flex; justify-content: center; margin-bottom: 25px"
        >
          <div v-for="message in this.articulo.messages" :key="message.id" class="col-9" style="display: flex; flex-direction: row">
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

              <button  type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModalR" @click="reportM.message = message.id">
                Reportar
              </button>
            </div>
          </div>

          <div class="modal fade" id="exampleModalR" tabindex="-1" aria-labelledby="exampleModalLabelR" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">

                <div v-if="this.$store.getters.isAuthenticated">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Reportar mensaje</h5>
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
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Preguntas</h2>
          <h3 class="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
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
    </section>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { extend } from "vee-validate";
import { required, min, max } from "vee-validate/dist/rules";
import es from "vee-validate/dist/locale/es.json";
import { localize } from "vee-validate";
localize("es", es);
extend("required", required);
extend("max", max);
extend("min", min);

import router from "../router";
import HeaderPage from "../components/HeaderPage.vue";
import GoogleMap from "../components/GoogleMap.vue"
import api from "../api";
export default {
  name: "articulo",
  props: ["id"],
  data() {
    return {
      articulo: {},
      reportA: {},
      reportM:{},
      messageBuy: {},
      mensaje: {},
    };
  },
  components: { HeaderPage, GoogleMap, ValidationProvider, ValidationObserver },
  mounted() {
    api.articulos
      .getOne(this.id)
      .then((response) => (this.articulo = response.data.data))
      .catch((error) => alert(error));
  },
  methods: {
    reportArticle()
    {
      if (!this.$store.getters.isAuthenticated) {
        router.push({
          path: "/login",
          query: {redirect: "articulo/" + this.id},
        });
      } else {
        this.reportA.article = this.id
        api.reportArticle
            .create(this.reportA)
            .then((response) => [console.log(response.data.status), this.reportA={} ])
            .catch((error) => alert(error));
      }
    },

    reportMessage()
    {
      if (!this.$store.getters.isAuthenticated) {
        router.push({
          path: "/login",
          query: {redirect: "articulo/" + this.id},
        });
      } else {
        console.log(this.reportM.message)
        api.reportMessage
            .create(this.reportM)
            .then((response) => [console.log(response.data.status), this.reportM={} ])
            .catch((error) => alert(error));
      }
    },

    buyArticle(){
      this.messageBuy.article = this.id
      if (!this.$store.getters.isAuthenticated) {
        router.push({
          path: "/login",
          query: {redirect: "articulo/" + this.id},
        });
      } else {
        this.messageBuy.article = this.id
        api.mensajes
            .buyArticle(this.messageBuy)
            .then((response) => [console.log(response.data.status), this.messageBuy={} ])
            .catch((error) => alert(error));
      }
    },

    getTagsName() {
      let etiquetas = "";
      this.articulo.tags.forEach((tagElement, index) => {
        if (index == this.articulo.tags.length - 1) {
          etiquetas += tagElement.name;
        } else {
          etiquetas += tagElement.name + " | ";
        }
      });
      return etiquetas;
    },
    saveMensaje() {
      if (!this.$store.getters.isAuthenticated) {
        router.push({
          path: "/login",
          query: { redirect: "articulo/" + this.id },
        });
      } else {
        this.mensaje.id_article = this.id;
        api.mensajes
          .create(this.mensaje)
          .then((response) => this.articulo.messages.push(response.data))
          .catch((error) => alert(error));
      }
    },
  },
};
</script>

<style scoped>
</style>