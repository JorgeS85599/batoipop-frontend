<template>
  <section class="page-section" id="contact">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Contact Us</h2>
        <h3 class="section-subheading text-muted">
          Lorem ipsum dolor sit amet consectetur.
        </h3>
      </div>
      

      <div class="row">
        <div class="col-md-6 mx-auto p-0">
          <div class="card">
            <div class="login-box">
              <div class="login-snip">
                <input
                  id="tab-1"
                  type="radio"
                  name="tab"
                  class="sign-in"
                  checked
                /><label for="tab-1" class="tab">Login</label>
                <input
                  id="tab-2"
                  type="radio"
                  name="tab"
                  class="sign-up"
                /><label for="tab-2" class="tab">Registrarte</label>
                <div class="login-space">
                  <div class="login">
                    <ValidationObserver v-slot="{ handleSubmit }">
                      <form @submit.prevent="handleSubmit(login)">
                        <div class="group">
                          <label for="user" class="label">Email</label>
                          <validation-provider
                            rules="required|email"
                            v-slot="{ errors }"
                            name="email"
                          >
                            <input
                              type="text"
                              class="input"
                              placeholder="example@exampl.com"
                              v-model="user.email"
                            />
                            <span class="text-danger">{{ errors[0] }}</span>
                          </validation-provider>
                        </div>
                        <div class="group">
                          <label for="pass" class="label">Password</label>
                          <validation-provider
                            rules="required"
                            v-slot="{ errors }"
                            name="password"
                          >
                            <input
                              type="password"
                              class="input"
                              data-type="password"
                              placeholder="Enter your password"
                              v-model="user.password"
                            />
                            <span class="text-danger">{{ errors[0] }}</span>
                          </validation-provider>
                        </div>
                        <div class="group">
                          <input
                            id="check"
                            type="checkbox"
                            class="check"
                            checked
                          />
                          <label for="check"
                            ><span class="icon"></span> Keep me Signed in</label
                          >
                        </div>
                        <div class="group">
                          <input type="submit" class="button" value="Login" />
                        </div>
                                  <span class="text-danger">{{ error }}</span>
                      </form>
                    </ValidationObserver>

                    <div class="hr"></div>
                    <div class="foot"><a href="#">Forgot Password?</a></div>
                  </div>

                  <div class="sign-up-form">
                    <ValidationObserver v-slot="{ handleSubmit }">
        
                    <form @submit.prevent="handleSubmit(signUp)" >
                    <div class="group">
                      <label for="user" class="label">Nombre de susuario</label>
                      <validation-provider
                  rules="required|min:5|max:20"
                  v-slot="{ errors }"
                  name="name"
                >
                      <input
                        id="user"
                        type="text"
                        class="input"
                        placeholder="Create your Username"
                        v-model="user.name"
                      />
                    <span class="text-danger">{{ errors[0] }}</span>
                      </validation-provider>
                    </div>
                    <div class="group">
                      <label for="pass" class="label">Password</label>
                      <validation-provider
                  rules="required|confirmed:confirmation"
                  v-slot="{ errors }"
                  name="password"
                >
                      <input
                        type="password"
                        class="input"
                        data-type="password"
                        placeholder="Create your password"
                      v-model="user.password"
                  />
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-provider>
                    </div>
                    <div class="group">
                      <label for="pass" class="label">Repeat Password</label>
                      <validation-provider vid="confirmation">
                      <input
                        type="password"
                        class="input"
                        data-type="password"
                        placeholder="Repeat your password"
                        v-model="confirmation"
                      />
                      </validation-provider>
                    </div>
                    <div class="group">
                      <label for="pass" class="label">Email Address</label>
                      <validation-provider rules="required|email"
                            v-slot="{ errors }"
                            name="email">
                      <input
                        id="pass"
                        type="text"
                        class="input"
                        placeholder="Enter your email address"
                        v-model="user.email"
                            />
                            <span class="text-danger">{{ errors[0] }}</span>
                          </validation-provider>

                    </div>
                    <div class="group">
                      <input type="submit" class="button" value="Sign Up" />
                    </div>
                    </form>
                    </ValidationObserver>
                    <div class="hr"></div>
                    <div class="foot">
                      <label for="tab-1">Already Member?</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import { ValidationProvider, ValidationObserver } from "vee-validate";
import { extend } from "vee-validate";
import { required, email,confirmed,min,max } from "vee-validate/dist/rules";
import es from "vee-validate/dist/locale/es.json";
import { localize } from "vee-validate";
import api from '../api';
localize("es", es);
extend("required", required);
extend("email", email);
extend("confirmed", confirmed);
extend("min", min);
extend("max", max);

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },

  data() {
    return {
      user: {},
      error: "",
      confirmation:""
    };
  },
  name: "login",
  mounted() {
    if (localStorage.token) {
      // Si el token caduca debemos comprobar que no haya expirado
      this.$store.commit("login", localStorage.token);
      this.loadPage();
    }
  },
  methods: {
    async login() {
      try {
        const respomse = await this.$store.dispatch("login", this.user);
        localStorage.setItem("token", respomse.data.token);
       const redirect = decodeURIComponent(this.$route.query.redirect || '/')
      this.$router.push({ path: redirect })
      } catch (error) {
        this.error = error;
      }
    },
    async signUp(){
        api.usuarios.create(this.user)
        .then(() => this.login())
        .catch(error => this.error = error)
    }
  },
};
</script>

<style scoped>
.login-box {
  width: 100%;
  margin: auto;
  max-width: 525px;
  min-height: 670px;
  position: relative;
 
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.login-snip {
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 90px 70px 50px 70px;
  background: rgba(15, 14, 2, 0.9);
}

.login-snip .login,
.login-snip .sign-up-form {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  transition: all 0.4s linear;
}

.login-snip .sign-in,
.login-snip .sign-up,
.login-space .group .check {
  display: none;
}

.login-snip .tab,
.login-space .group .label,
.login-space .group .button {
  text-transform: uppercase;
}

.login-snip .tab {
  font-size: 22px;
  margin-right: 15px;
  padding-bottom: 5px;
  margin: 0 15px 10px 0;
  display: inline-block;
  border-bottom: 2px solid transparent;
}

.login-snip .sign-in:checked + .tab,
.login-snip .sign-up:checked + .tab {
  color: #fff;
  border-color: #1161ee;
}

.login-space {
  min-height: 345px;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
}

.login-space .group {
  margin-bottom: 15px;
}

.login-space .group .label,
.login-space .group .input,
.login-space .group .button {
  width: 100%;
  color: #fff;
  display: block;
}

.login-space .group .input,
.login-space .group .button {
  border: none;
  padding: 15px 20px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
}

.login-space .group input[data-type="password"] {
  text-security: circle;
  -webkit-text-security: circle;
}

.login-space .group .label {
  color: #aaa;
  font-size: 12px;
}

.login-space .group .button {
  background: #1161ee;
}

.login-space .group label .icon {
  width: 15px;
  height: 15px;
  border-radius: 2px;
  position: relative;
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
}

.login-space .group label .icon:before,
.login-space .group label .icon:after {
  content: "";
  width: 10px;
  height: 2px;
  background: #fff;
  position: absolute;
  transition: all 0.2s ease-in-out 0s;
}

.login-space .group label .icon:before {
  left: 3px;
  width: 5px;
  bottom: 6px;
  transform: scale(0) rotate(0);
}

.login-space .group label .icon:after {
  top: 6px;
  right: 0;
  transform: scale(0) rotate(0);
}

.login-space .group .check:checked + label {
  color: #fff;
}

.login-space .group .check:checked + label .icon {
  background: #1161ee;
}

.login-space .group .check:checked + label .icon:before {
  transform: scale(1) rotate(45deg);
}

.login-space .group .check:checked + label .icon:after {
  transform: scale(1) rotate(-45deg);
}

.login-snip .sign-in:checked + .tab + .sign-up + .tab + .login-space .login {
  transform: rotate(0);
}

.login-snip .sign-up:checked + .tab + .login-space .sign-up-form {
  transform: rotate(0);
}

*,
:after,
:before {
  box-sizing: border-box;
}

.clearfix:after,
.clearfix:before {
  content: "";
  display: table;
}

.clearfix:after {
  clear: both;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

.hr {
  height: 2px;
  margin: 60px 0 50px 0;
  background: rgba(255, 255, 255, 0.2);
}

.foot {
  text-align: center;
}

.card {
  width: 500px;
  left: 100px;
  background-color: #9ca5b500;
}

::placeholder {
  color: #b3b3b3;
}
</style>