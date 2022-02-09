<template>
  <section class="page-section" id="contact">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Contact Us</h2>
        <h3 class="section-subheading text-muted">
          Lorem ipsum dolor sit amet consectetur.
        </h3>
      </div>
      <!-- * * * * * * * * * * * * * * *-->
      <!-- * * SB Forms Contact Form * *-->
      <!-- * * * * * * * * * * * * * * *-->
      <!-- This form is pre-integrated with SB Forms.-->
      <!-- To make this form functional, sign up at-->
      <!-- https://startbootstrap.com/solution/contact-forms-->
      <!-- to get an API token!-->
      <form id="contactForm" data-sb-form-api-token="API_TOKEN">
        <div
          class="row align-items-stretch mb-5"
          style="display: flex; justify-content: center"
        >
          <div class="col-6">
            <div class="form-group">
              <!-- Name input-->
              <input
                class="form-control"
                id="name"
                type="text"
                placeholder="Your Name or Email"
                data-sb-validations="required"
              />
              <div class="invalid-feedback" data-sb-feedback="name:required">
                A name is required.
              </div>
            </div>
            <div class="form-group mb-md-0">
              <!-- Phone number input-->
              <input
                class="form-control"
                id="password"
                type="password"
                placeholder="Password"
                data-sb-validations="required"
              />
              <div class="invalid-feedback" data-sb-feedback="phone:required">
                A phone number is required.
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
          <div class="text-center text-danger mb-3">Error sending message!</div>
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
</template>

<script>
export default {
  name: "login",
};
</script>

<style scoped>
</style>