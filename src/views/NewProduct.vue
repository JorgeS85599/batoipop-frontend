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
          <multiselect
            v-model="product.etiquetas"
            tag-placeholder="Add this as new tag"
            placeholder="Search or add a tag"
            label="name"
            track-by="name"
            :options="options"
            :multiple="true"
          ></multiselect>
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

        <div class="form-group">
          <vue-dropzone
            ref="myVueDropzone"
            id="dropzone"
            :options="dropzoneOptions"
            :useCustomSlot="true"
            v-on:vdropzone-success="uploadSuccess"
            v-on:vdropzone-error="uploadError"
            v-on:vdropzone-removed-file="fileRemoved"
          >
            <div class="dropzone-custom-content">
              <h3 class="dropzone-custom-title">
                Drag and drop to upload content!
              </h3>
              <div class="subtitle">
                ...or click to select a file from your computer
              </div>
            </div>
          </vue-dropzone>
        </div>

        <div class="form-group">
          <GoogleMap v-on:sendLocation="saveLocation" />
        </div>

        <button id="boton" type="submit" class="btn btn-default btn-primary">
          Añadir
        </button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import api from "../api";
import Multiselect from "vue-multiselect";
import vueDropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import GoogleMap from "../components/GoogleMap.vue";

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
extend("image", image);

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    Multiselect,
    vueDropzone,
    GoogleMap,
  },
  data() {
    return {
      ifEdit: false,
      product: { images: [] },
      value: [],
      options: [],
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        addRemoveLinks: true,
        maxFiles: 4,
      },
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
          .then((response) => console.log(response))
          .catch((error) => alert(error));
      }
    },
    //ver fotos
    uploadSuccess(file, response) {
      console.log(
        "File Successfully Uploaded with file name: " + response.file
      );
      console.log(file);
      this.product.images.push(file);
    },
    uploadError() {
      console.log("An Error Occurred");
    },
    fileRemoved(file) {
      let index = this.product.images.findIndex(
        (item) => item.name === file.name
      );
      this.product.images.splice(index, 1);
    },
    saveLocation(location) {
      this.product.latitud = location.lat;
      this.product.longitud = location.lng;
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

  mounted() {
    this.$store.state.categorias.forEach((categoria) => {
      this.options.push({ name: categoria.name, id: categoria.id });
    });
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
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