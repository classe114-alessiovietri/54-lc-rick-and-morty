<script>
import SingleCharacter from './SingleCharacter.vue';
import { store } from '../store.js';

export default {
    data() {
        return {
            store
        };
    },
    components: {
        SingleCharacter
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-6 col-md-3 mb-3 text-center"
                    v-for="(character, i) in store.characters"
                    :key="i">
                    <SingleCharacter :character="character" />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
</style>
