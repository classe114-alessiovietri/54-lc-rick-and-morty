<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
import { store } from './store.js';

export default {
    data() {
        return {
            store,
            isLoading: false
        };
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },  
    methods: {
        getResults() {
            // const queryParams = {};

            // if (this.store.searchText.length > 0) {
            //     queryParams.name = this.store.searchText;
            // }

            // if (this.store.searchStatus.length > 0) {
            //     queryParams.status = this.store.searchStatus;
            // }
            
            this.isLoading = true;

            axios
                .get(this.store.baseUrl, {
                    // params: queryParams
                    params: {
                        name: this.store.searchText.length > 0 ? this.store.searchText : null,
                        status: this.store.searchStatus.length > 0 ? this.store.searchStatus : null,
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
                    
                    this.isLoading = false;
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

    <h1 v-if="isLoading" class="text-center">
        CARICAMENTO...
    </h1>

    <AppMain />

    <AppFooter />
</template>

<style lang="scss">
@use "assets/scss/main" as *;
</style>
