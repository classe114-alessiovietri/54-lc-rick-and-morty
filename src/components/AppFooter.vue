<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store
        };
    }
}
</script>

<template>
    <footer class="mt-4">
        <div class="container text-center">
            <div class="row">
                <div class="col py-3 fw-bold">
                    Found {{ store.characters.length }} characters
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
</style>
