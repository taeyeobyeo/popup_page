// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import firebase from 'firebase'
// var config = {
//   apiKey: "AIzaSyAeizSulUyLs6RoVa82vOW99hw0ldFJqX8",
//   authDomain: "capstone-67677.firebaseapp.com",
//   databaseURL: "https://capstone-67677.firebaseio.com",
//   projectId: "capstone-67677",
//   storageBucket: "capstone-67677.appspot.com",
//   messagingSenderId: "719697691522"
// };
// firebase.initializeApp(config);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
