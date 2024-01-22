<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';

export default {
    data() {
        return {
            baseUrl: 'https://rickandmortyapi.com/api/character',
            characters: []
        };
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },  
    methods: {

    },
    created() {
        axios
            .get(this.baseUrl)
            .then((response) => {
                console.log(response);
                this.characters = response.data.results;
                console.log(this.characters);
            });
    }
}
</script>

<template>
    <AppHeader />

    <AppMain :allCharacters="characters" />

    <AppFooter :charactersNumber="characters.length" />
</template>

<style lang="scss">
@use "assets/scss/main" as *;
</style>
