<template>
    <section>
        <h3>Profile</h3>
        <p>{{displayName}}</p>
        <button v-on:click="logout">Log out</button>
    </section>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState(['user']),
        displayName () {
            return !!this.user ? this.user.displayName : ''
        }
    },
    methods: {
        logout: function(){
            this.$auth.logout();
            this.$router.replace({name: login})
        }
    }
}
</script>

<style scoped>

</style>
