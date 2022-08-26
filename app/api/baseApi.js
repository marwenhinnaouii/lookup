import axios from 'axios';

const baseApi = axios.create({
  baseURL: 'http://192.168.1.17:8088/api',
  responseType: 'json',

});

export default baseApi;