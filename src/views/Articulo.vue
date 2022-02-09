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
                  <div class="carousel-item active">
                    <img
                      class="img-fluid"
                      src="@/assets/img/portfolio/1.jpg"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="img-fluid"
                      src="@/assets/img/portfolio/1.jpg"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="img-fluid"
                      src="@/assets/img/portfolio/1.jpg"
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
                <div class="col-9" style="display: flex; flex-direction: row">
                  <div class="col-6">
                    <img
                      class="img-fluid"
                      src="@/assets/img/portfolio/1.jpg"
                      alt="..."
                    />
                  </div>
                  <div class="col-6">
                    <div
                      class="row"
                      style="display: flex; justify-content: flex-start"
                    >
                      <p class="portfolio-caption-heading">
                        {{ this.articulo.owner.name }}
                      </p>
                      <ul class="stars">
                        <li 
                        v-for="star in this.articulo.valoration"
                        :key="star"
                        >
                          <i class="bi bi-star-fill" style="color: #f3da35"></i>
                        </li>
                        <li 
                        v-for="cowStar in (5 - this.articulo.valoration)"
                        :key="cowStar"
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
                  <td>{{this.getTagsName()}}</td>
                </tr>
                <tr>
                  <th scope="row">Ubicación</th>
                  <td>Puerto Real</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <section class="page-section">
      <div class="container">
        <div
          style="display: flex; justify-content: center; margin-bottom: 25px"
        >
          <div class="col-9" style="display: flex; flex-direction: row">
            <div class="col-lg-1 col-md-2 col-sm-3 col-4">
              <!-- User photo-->
              <img
                class="img-fluid"
                src="@/assets/img/portfolio/1.jpg"
                alt="..."
              />
            </div>
            <div
              class="col-lg-11 col-md-10 col-sm-9 col-8"
              style="margin-left: 10px"
            >
              <p>
                ("Mensaje")Lorem ipsume dolor sit amet, adipisicing elite.
                Itaque, corporis nulla aspernatur.
              </p>
            </div>
          </div>
        </div>
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Preguntas</h2>
          <h3 class="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
          <div
            class="row align-items-stretch mb-5"
            style="display: flex; justify-content: center"
          >
            <div class="col-md-9">
              <div class="form-group form-group-textarea mb-md-0">
                <!-- Message input-->
                <textarea
                  class="form-control"
                  id="message"
                  placeholder="Your Message"
                  style="resize: none"
                  data-sb-validations="required"
                ></textarea>
                <div
                  class="invalid-feedback"
                  data-sb-feedback="message:required"
                >
                  A message is required.
                </div>
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
              class="btn btn-primary btn-xl text-uppercase disabled"
              id="submitButton"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderPage from "../components/HeaderPage.vue";
import api from "../api";
export default {
  name: "articulo",
  props: ["id"],
  data() {
    return {
      articulo: {},
    };
  },
  components: { HeaderPage },
  mounted() {
    api.articulos
      .getOne(this.id)
      .then((response) => (this.articulo = response.data))
      .catch((error) => alert(error));
  },
  methods: {
    getTagsName() {
      let etiquetas = ""
      this.articulo.tags.forEach((tagElement,index) => {
        if (index == this.articulo.tags.length - 1) {
          etiquetas += tagElement.name
        } else {
          etiquetas += (tagElement.name + ' | ')
        }
      });
      return etiquetas
    }
  }
};
</script>

<style scoped>
</style>