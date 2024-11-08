import 'normalize.css';
import Vue from 'vue';
import App from './TodoApp.vue';
import store from './store';

Vue.config.productionTip = false;

new Vue({
   store,
   render: (h) => h(App),
}).$mount('#TodoApp');
