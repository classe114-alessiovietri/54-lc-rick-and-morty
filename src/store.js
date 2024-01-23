import { reactive } from 'vue';

export const store = reactive({
    baseUrl: 'https://rickandmortyapi.com/api/character',
    searchText: '',
    searchStatus: '',
    characters: []
});