<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
import { store } from './store.js';

export default {
    data() {
        return {
            store
        };
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },  
    methods: {
        getResults() {
            axios
                .get(this.store.baseUrl, {
                    params: {
                        name: this.store.searchText,
                        status: this.store.searchStatus,
                    }    
                })
                .then((response) => {
                    console.log(response);
                    this.store.characters = response.data.results;
                    console.log(this.store.characters);
                })
                .catch((error) => {
                    this.store.characters = [];
                })
                .finally(() => {
                    console.log('Questo console.log viene eseguito sempre alla fine della chiamata API');
                });
        }
    },
    created() {
        this.getResults();
    }
}
</script>

<template>
    <AppHeader @performSearch="getResults()" />

    <AppMain />

    <AppFooter />
</template>

<style lang="scss">
@use "assets/scss/main" as *;
</style>
