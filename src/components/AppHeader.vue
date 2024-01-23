<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
    data() {
        return {
            store,
        };
    },
    methods: {
        // getDataFromApi() {
        //     // let queryString = '';

        //     // if (this.searchText.length > 0 || this.searchStatus.length > 0) {
        //     //     queryString = '?';

        //     //     if (this.searchText.length > 0) {
        //     //         queryString += 'name=' + this.searchText + '&';
        //     //     }

        //     //     if (this.searchStatus.length > 0) {
        //     //         queryString += 'status=' + this.searchStatus;
        //     //     }
        //     // }

        //     // const fullUrl = this.store.baseUrl + queryString;
        //     // console.log(fullUrl);

        //     // axios
        //     //     .get(this.store.baseUrl, {
        //     //         params: {
        //     //             name: this.searchText,
        //     //             status: this.searchStatus,
        //     //         }    
        //     //     })
        //     //     .then((response) => {
        //     //         console.log(response);
        //     //         this.store.characters = response.data.results;
        //     //         console.log(this.store.characters);
        //     //     })
        //     //     .catch((error) => {
        //     //         this.store.characters = [];
        //     //     })
        //     //     .finally(() => {
        //     //         console.log('Questo console.log viene eseguito sempre alla fine della chiamata API');
        //     //     });
        // }
    }
}
</script>

<template>
    <header class="mb-4">
        <div class="container text-center">
            <div class="row mb-4">
                <div class="col">
                    <h1>
                        Rick & Morty App
                    </h1>
                </div>
            </div>

            <div class="row">
                <div class="col-6 offset-3">
                    <form @submit.prevent="$emit('performSearch')">
                        <div class="row">
                            <div class="col">
                                <input
                                    v-model="store.searchText"
                                    type="text"
                                    class="form-control"
                                    placeholder="Search character"
                                    aria-label="Search character">
                            </div>
                            <div class="col">
                                <select v-model="store.searchStatus" class="form-select" aria-label="Status">
                                    <option selected value="">Select status</option>
                                    <option value="alive">Alive</option>
                                    <option value="dead">Dead</option>
                                    <option value="unknown">Unknown</option>
                                </select>
                            </div>
                            <div class="col-auto">
                                <button type="submit" class="btn btn-primary mb-3">
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
</style>
