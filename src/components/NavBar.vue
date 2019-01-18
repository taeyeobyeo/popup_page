<template>
    <div>
        <router-link v-show="!user" :to="{name: 'login'}">Sign in</router-link>
        <router-link v-show="!!user" :to="{name: 'main'}">Main</router-link>
        <router-link to="/mirror">Mirror</router-link>
        <button v-on:click="onoff()">ON/OFF</button>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'navBar',
    computed: {
        ...mapState(['user'])
    }
}
</script>

<style scoped>

</style>
