<template>
  <div id="app">
    <router-link to="/">HelloWorld</router-link>
    <router-link to="/mirror">Mirror</router-link>
    <button v-on:click="onoff()">ON/OFF</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    onoff: function(){
      console.log("clicked");
      chrome.runtime.sendMessage(
        {data:"trigger"},
        (response)=>{
            console.log(response);
        }
      );
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
