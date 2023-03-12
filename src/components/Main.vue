<template>
    <main class="container">

        <CardsMovie />


        <CardsSeries />


    </main>
</template>

<!-- ****************************************************************************** -->

<script>
import store from '../store'
import CardsMovie from './CardMovie.vue'
import CardsSeries from './CardSeries.vue';

export default {
    components: {
        CardsMovie,
        CardsSeries
    },

    data() {
        return {
            store
        }
    },
}
</script>

<!-- ****************************************************************************** -->

<style lang="scss" scoped>


</style>