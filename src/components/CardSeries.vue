<template>
    <div class="cards ">
        <ul class="grid">
            <li v-for="series in store.tvs" :key="series.id">
                <div class="series-thumb">
                    <img :src="imgUrl + series.poster_path" alt="">
                    <div class="series-info">
                        <h2>{{ series.name }}</h2>
                        <h4>{{ series.original_name }}</h4>
                        <img v-if="flags[series.original_language]" :src="flags[series.original_language]" width="30">
                        <p v-else> {{ series.original_language }}</p>
                        <p> {{ series.overview }}</p>
                        <p>{{ series.vote_average / 2 }}</p>

                    </div>
                </div>

            </li>
        </ul>

    </div>
</template>

<!-- ****************************************************************************** -->

<script>

import store from '../store'
export default {
    data() {
        return {
            store,
            flags: {
                it: '/it.png',
                en: '/en.png'
            },


        }
    },

    computed: {
        imgUrl() {
            return this.store.config.IMG_URI
        }
    },

    methods:{
        // getInteger(this.store.tvs.vote_average){


        // }
    },

    // created(){
    //     console.log(store.tvs[0].vote_average)
    // }
}
</script>

<!-- ****************************************************************************** -->

<style lang="scss" scoped>
li {
    color: white;
}

.series-thumb{
    aspect-ratio: 1/1.5;
    object-fit: cover;
    object-position: center
}
</style>