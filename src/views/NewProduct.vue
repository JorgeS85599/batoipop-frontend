<template>
  <div>
    <h1>{{ ifEdit ? "Editar producto" : "Añadir producto" }}</h1>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form novalidate @submit.prevent="handleSubmit(addProduct)">

        <div class="form-group">
          <label for="newprod-name">Nombre:</label>
          <validation-provider
            rules="required|min:5|max:50"
            v-slot="{ errors }"
          >
            <input
              type="text"
              class="form-control"
              id="name"
              name="Nombre"
              v-model="product.name"
            />
            <span class="text-danger">{{ errors[0] }}</span>
          </validation-provider>
        </div>

        <validation-provider rules="required|min:5|max:255" v-slot="{ errors }">
          <div class="form-group">
            <label for="newprod-name">Descripcion:</label>
            <div class="md-form">
              <textarea
                class="md-textarea form-control"
                rows="3"
                name="Descripcion"
                v-model="product.description"
              ></textarea>
            </div>
          </div>
          <span class="text-danger">{{ errors[0] }}</span>
        </validation-provider>

        <div class="form-group">
          <label for="newprod-name">Categoria:</label>
          <validation-provider
            rules="required"
            v-slot="{ errors }"
            name="categoria"
          >
            <select v-model="product.category">
              <option value="">--Seleciona una Categoria</option>
              <option
                v-for="category in categorias"
                :key="category.id"
                :value="category.id"
              >
                {{ category.name }}
              </option>
            </select>
            <span class="text-danger">{{ errors[0] }}</span>
          </validation-provider>
        </div>

        <div class="form-group">
          <validation-provider
            rules="required|numeric"
            v-slot="{ errors }"
            name="Precio"
          >
            <label> Precio</label>
            <input type="number" name="Precio" v-model="product.price" />
            <span class="text-danger">{{ errors[0] }}</span>
          </validation-provider>
        </div>

      <validation-provider name="foto" rules="image" v-slot="{ errors}">
        <input type="file" @change="oneFileChange" />
        <div id="preview">
          <img v-if="photoOne" :src="photoOne" />
        </div>
        <span class="text-danger">{{ errors[0] }}</span>
      </validation-provider>

        <input v-if="photoOne" type="file" @change="twoFileChange" />
        <div id="preview">
          <img v-if="photoTwo" :src="photoTwo" />
        </div>

        <input v-if="photoTwo" type="file" @change="threeFileChange" />
        <div id="preview">
          <img v-if="photoThree" :src="photoThree" />
        </div>


                <input  type="text" v-model="product.latitud" />
        <input  type="text"  v-model="product.longitud" />



        <button id="boton" type="submit" class="btn btn-default btn-primary">
          Añadir
        </button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import api from "../api";

import { ValidationProvider, ValidationObserver } from "vee-validate";
import { extend } from "vee-validate";
import { required, min, max, numeric, image } from "vee-validate/dist/rules";
import es from "vee-validate/dist/locale/es.json";
import { localize } from "vee-validate";
localize("es", es);

extend("required", required);
extend("max", max);
extend("min", min);
extend("numeric", numeric);
extend("image",image)

export default {

  
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      photoOne: null,
      photoTwo: null,
      photoThree: null,
      ifEdit: false,
      product: {},
    };
  },
  methods: {
    addProduct() {
      if (this.ifEdit) {
        api.articulos
          .modify(this.product)
          .then(() => this.$router.push("/articulos/" + this.product.id))
          .catch((error) => alert(error));
      } else {
        api.articulos
          .create(this.product)
          .then(() => this.$router.push("/articulos/" + this.product.id))
          .catch((error) => alert(error));
      }
    },
    //ver fotos
    oneFileChange(e) {
      const file = e.target.files[0];
      this.photoOne = URL.createObjectURL(file);
    },
    twoFileChange(e) {
      const file = e.target.files[0];
      this.photoTwo = URL.createObjectURL(file);
    },
    threeFileChange(e) {
      const file = e.target.files[0];
      this.photoThree = URL.createObjectURL(file);
    },
    /* se supone que vacia el file
    <input type="file" ref="inputFile"/>

this.$refs.inputFile.reset();
    */
  },

  computed: {
    categorias() {
      return this.$store.state.categorias;
    },
  },

  
};
</script>

<style scoped>
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 100%;
  max-height: 500px;
}
</style>