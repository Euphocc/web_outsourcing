// import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import 'bootstrap/dist/css/bootstrap.css' //引用bootstrap的样式
import 'bootstrap/dist/js/bootstrap.min.js' //引用bootstrap的js

import axios from 'axios'
import VueAxios from 'vue-axios'

// Vue.use(VueAxios, axios)
// axios.defaults.baseURL = '/api/'
axios.defaults.baseURL = "/api";
axios.defaults.timeout = 20000;
createApp(App).use(router, axios, VueAxios).mount('#app')
