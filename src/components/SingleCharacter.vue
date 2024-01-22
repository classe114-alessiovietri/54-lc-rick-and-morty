<script>
export default {
    data() {
        return {

        };
    },
    props: {
        character: Object
    }
}
</script>

<template>
    <div class="single-character">
        <div class="mb-2">
            <img class="w-100 rounded-circle"
                :src="character.image"
                :alt="character.name">
        </div>

        <div>
            <h2 class="mb-3 fs-5">
                {{ character.name }}
            </h2>

            <h4 class="fs-6">
                {{ character.status }}
            </h4>
            <h4 class="fs-6">
                {{ character.species }}
            </h4>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>
