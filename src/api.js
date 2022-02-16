import axios from 'axios'

const baseURL = 'http://batoipop.my/api';

const articulos = {
    getAll: () => axios.get(`${baseURL}/articles`),
    getPerPage: (page,filter) => axios.get(`${baseURL}/articles?page=${page}&${filter}`),
    getOne: (id) => axios.get(`${baseURL}/articles/${id}`),
    create: (item) => axios.post(`${baseURL}/articles`, item),
    modify: (item) => axios.put(`${baseURL}/articles/${item.id}`, item),
    delete: (id) => axios.delete(`${baseURL}/articles/${id}`),
};

const categorias = {
    getAll: () => axios.get(`${baseURL}/categories`),
    getPerPage: (page) => axios.get(`${baseURL}/categories?page=${page}`),
    getOne: (id) => axios.get(`${baseURL}/categories/${id}`),
    create: (item) => axios.post(`${baseURL}/ecategories`, item),
    modify: (item) => axios.put(`${baseURL}/categories/${item.id}`, item),
    delete: (id) => axios.delete(`${baseURL}/categories/${id}`),
};

const usuarios = {
    getAll: () => axios.get(`${baseURL}/users`),
    getPerPage: (page) => axios.get(`${baseURL}/users?page=${page}`),
    getOne: (id) => axios.get(`${baseURL}/users/${id}`),
    create: (item) => axios.post(`${baseURL}/eusers`, item),
    modify: (item) => axios.put(`${baseURL}/users/${item.id}`, item),
    delete: (id) => axios.delete(`${baseURL}/users/${id}`),
};

const tags = {
    getAll: () => axios.get(`${baseURL}/tags`),
    getPerPage: (page) => axios.get(`${baseURL}/tags?page=${page}`),
    getOne: (id) => axios.get(`${baseURL}/tags/${id}`),
    create: (item) => axios.post(`${baseURL}/etags`, item),
    modify: (item) => axios.put(`${baseURL}/tags/${item.id}`, item),
    delete: (id) => axios.delete(`${baseURL}/tags/${id}`),
};




export default {
    articulos,
    categorias,
    usuarios,
    tags
};