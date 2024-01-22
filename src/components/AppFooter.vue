<script>
export default {
    data() {
        return {

        };
    },
    props: {
        charactersNumber: Number
    }
}
</script>

<template>
    <footer class="mt-4">
        <div class="container text-center">
            <div class="row">
                <div class="col py-3 fw-bold">
                    Found {{ charactersNumber }} characters
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
</style>
