import store from './store'
import Firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAeizSulUyLs6RoVa82vOW99hw0ldFJqX8",
  authDomain: "capstone-67677.firebaseapp.com",
  databaseURL: "https://capstone-67677.firebaseio.com",
  projectId: "capstone-67677",
  storageBucket: "capstone-67677.appspot.com",
  messagingSenderId: "719697691522"
}

export default {
  install: (Vue, options) => {
    const firebase = Firebase.initializeApp(config)
    const auth = firebase.auth()
    Vue.prototype.$auth = {
        loginG: async () => {
            const provider = new Firebase.auth.GoogleAuthProvider();
            return await auth.signInWithPopup(provider);
        },
        logout: async () => {
            await auth.signOut()
        }
    }
    auth.onAuthStateChanged(user => {
        store.commit('updateUser',{ user })
    })
  }
}

