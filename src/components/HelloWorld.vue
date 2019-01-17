<template>
  <div class="hello">
    <div v-if="bool==true">
      <p>logged in</p>
      <button v-on:click="logoutf()">LogOut</button>
    </div>
    <div v-else>
      <p>logged out</p>
      <button v-on:click="loginf()">LogIn</button>
    </div>
  </div>
</template>

<script>
import db from './firebaseInit'
import firebase from 'firebase'
let bool = false;
let user;
let token;
let provider
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    loginf: function(){
      console.log('login');
      firebase.auth().signInWithRedirect(provider);
      // firebase.auth().signInWithPopup(provider).then(function(result) {
      //   // This gives you a Google Access Token. You can use it to access the Google API.
      //   token = result.credential.accessToken;
      //   // The signed-in user info.
      //   user = result.user;
      //   // ...
      // }).catch(function(error) {
      //   // Handle Errors here.
      //   var errorCode = error.code;
      //   var errorMessage = error.message;
      //   // The email of the user's account used.
      //   var email = error.email;
      //   // The firebase.auth.AuthCredential type that was used.
      //   var credential = error.credential;
      //   // ...
      // });
    },
    logoutf: function(){
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
    }
  },
  mount(){
    provider = new firebase.auth.GoogleAuthProvider();
    user = firebase.auth().currentUser;
    if (user) {
      // User is signed in.
      bool = true;
    } else {
      // No user is signed in.
      bool = false;
    }
    console.log(bool);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
