import axios from 'axios'

const baseURL = 'http://batoipop.my/api';

const articulos = {
    getAll: () => axios.get(`${baseURL}/articles`),
    getPerPage: (page) => axios.get(`${baseURL}/articles?page=${page}`),
    getOne: (id) => axios.get(`${baseURL}/articles/${id}`),
    create: (item) => axios.post(`${baseURL}/earticles`, item),
    modify: (item) => axios.put(`${baseURL}/articles/${item.id}`, item),
    delete: (id) => axios.delete(`${baseURL}/articles/${id}`),
};




export default {
    articulos
};