<template>
    <div class="cards ">
        <ul class="grid">
            <li v-for="movie in store.movies" :key="movie.id">
                <div class="movie-thumb">
                    <img :src="imgUrl + movie.poster_path" alt="">

                    <div class="movie-info">
                        <h2>{{ movie.title }}</h2>
                        <h4>{{ movie.original_title }}</h4>
                        <p>{{ movie.original_language }}</p>
                        <p>{{ movie.vote_average }}</p>

                    </div>
                </div>
            </li>
        </ul>

    </div>
</template>

<!-- ****************************************************************************** -->

<script>

import { objectToString } from '@vue/shared';
import store from '../store'
export default {
    props:{
        item:{
            type: Object,
            required: true
        }
    },
    data() {
        return {
            store,
            imgUrl: store.config.IMG_URI

        }
    },

    computed:{
        movieThumb(){
            return this.store.movies.res.data.poster_path
        }
    }
}
</script>

<!-- ****************************************************************************** -->

<style lang="scss" scoped>
li {
    color: white;
}

// .grid {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     gap: 40px;
// }
</style>