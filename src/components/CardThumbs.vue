<template>
    <div>

    </div>
</template>

<!-- ****************************************************************************** -->

<script>
import store from '../store';

    export default {
        data() {
            return {
                store,
                imgUrl: store.config.IMG_URI + store.movies.res.data.poster_path
            }
        },
    }
</script>

<!-- ****************************************************************************** -->

<style lang="scss" scoped>

</style>