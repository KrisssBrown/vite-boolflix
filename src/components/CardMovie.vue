<template>
    <div class="cards ">
        <ul class="grid">
            <li class="card" v-for="movie in store.movies" :key="movie.id">
                <div class="movie-thumb">
                    <img :src="imgUrl + movie.poster_path" alt="">
                    <div class="movie-info-bg">
                        <div class="movie-info">
                            <h2>{{ movie.title }}</h2>
                            <h4>{{ movie.original_title }}</h4>
                            <img v-if="flags[movie.original_language]" :src="flags[movie.original_language]" width="30">
                            <p v-else> {{ movie.original_language }}</p>
                            <p>{{ movie.overview }}</p>
                            <p>{{ movie.vote_average / 2 }}</p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>

    </div>

    <hr>
    <br>
</template>

<!-- ****************************************************************************** -->

<script>
import store from '../store'
export default {
    // props: {
    //     item: {
    //         type: Object,
    //         required: true
    //     }
    // },
    data() {
        return {
            store,
            imgUrl: store.config.IMG_URI,
            flags: {
                it: '/it.png',
                en: '/en.png'
            }

        }
    },

    computed: {
        movieThumb() {
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

// .card{
//     position: relative;
// }

.movie-thumb {
    aspect-ratio: 1/1.5;
    object-fit: cover;
    object-position: center;
    position: relative;

    // img {
    //     display: inline-block;
    // }

    // .movie-info-bg{
    //     background-color: rgba(0,0,0,0.5);
    // }
    // .movie-info {
    //     position: absolute;
    //     top: 0px;
    //     overflow-y: auto;
    // }
}
</style>