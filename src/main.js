// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import NavBar from './components/NavBar'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from './store'
import FirebaseAuthPlugin from './FirebaseAuthPlugin'

Vue.use(FirebaseAuthPlugin)

sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  components: { App, NavBar },
  template: '<App/>'
})

export { app, router, store}
