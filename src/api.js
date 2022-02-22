import axios from 'axios'
import store from './store'
import router from './router'

const baseURL = 'http://laravel.my/api';

const articulos = {
    getAll: () => axios.get(`${baseURL}/articles`),
    getPerPage: (page) => axios.get(`${baseURL}/articles?page=${page}`),
    getArticleUserPerPage: (page,id) => axios.get(`${baseURL}/articles?page=${page}&owner_id=${id}`),
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
    create: (item) => axios.post(`${baseURL}/users`, item),
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

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
}, (error) => {
    if (error.config) {
        switch (error.config.status) {
            case 401:
                store.commit('logout')
                if (router.currentRoute.path !== 'login') {
                    router.replace({
                        path: 'login',
                        query: { redirect: router.currentRoute.path },
                    })
                }
        }
    }
    return Promise.reject(error)
})
const valoracion = {
    create: (item) => axios.post(`${baseURL}/valoraciones`, item),
};




export default {
    articulos,
    categorias,
    usuarios,
    tags,
    valoracion
};