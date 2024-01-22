<script>
import SingleCharacter from './SingleCharacter.vue';

export default {
    data() {
        return {

        };
    },
    components: {
        SingleCharacter
    },
    props: {
        allCharacters: Array
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-6 col-md-3 mb-3 text-center"
                    v-for="(character, i) in allCharacters"
                    :key="i">
                    <SingleCharacter :character="character" />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
</style>
