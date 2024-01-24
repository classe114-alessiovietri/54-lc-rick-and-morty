<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store,
            firstName: 'Alessio',
            lastName: 'Vietri',
            numeroACaso: 6
        };
    },
    methods: {
        getAliveCharactersNumber() {
            console.log('getAliveCharactersNumber');

            const aliveCharacters = this.store.characters.filter((elem) => {
                return elem.status == 'Alive';
            });

            return aliveCharacters.length;
        },
        getDeadCharactersNumber() {
            console.log('getDeadCharactersNumber');

            const deadCharacters = this.store.characters.filter((elem) => {
                return elem.status == 'Dead';
            });

            return deadCharacters.length;
        },
        getUnknownCharactersNumber() {
            console.log('getUnknownCharactersNumber');

            const unknownCharacters = this.store.characters.filter((elem) => {
                return elem.status == 'unknown';
            });

            return unknownCharacters.length;
        }
    },
    computed: {
        aliveCharactersNumber() {
            console.log('aliveCharactersNumber COMPUTED');

            const aliveCharacters = this.store.characters.filter((elem) => {
                return elem.status == 'Alive';
            });

            return aliveCharacters.length;
        },
        deadCharactersNumber() {
            console.log('deadCharactersNumber COMPUTED');

            const deadCharacters = this.store.characters.filter((elem) => {
                return elem.status == 'Dead';
            });

            return deadCharacters.length;
        },
        unknownCharactersNumber() {
            console.log('unknownCharactersNumber COMPUTED');

            const unknownCharacters = this.store.characters.filter((elem) => {
                return elem.status == 'unknown';
            });

            return unknownCharacters.length;
        }
    }
}
</script>

<template>
    <footer class="mt-4">
        <div class="container text-center">
            <h3>
                {{ numeroACaso }}
            </h3>
            <div>
                <button @click="numeroACaso++">
                    INCREMENTA NUMERO
                </button>
            </div>

            <div class="row">
                <div class="col-12 py-3 fw-bold">
                    Found {{ store.characters.length }} characters
                </div>
                <div class="col-4 py-3 fw-bold">
                    <div>
                        Found {{ getAliveCharactersNumber() }} characters alive
                    </div>
                    <div>
                        Found {{ aliveCharactersNumber }} characters alive
                    </div>
                </div>
                <div class="col-4 py-3 fw-bold">
                    <div>
                        Found {{ getDeadCharactersNumber() }} characters dead
                    </div>
                    <div>
                        Found {{ deadCharactersNumber }} characters dead
                    </div>
                </div>
                <div class="col-4 py-3 fw-bold">
                    <div>
                        Found {{ getUnknownCharactersNumber() }} characters unknown
                    </div>
                    <div>
                        Found {{ unknownCharactersNumber }} characters unknown
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
</style>
