<template>
    <div class="cards ">
        <ul class="grid">
            <li v-for="series in store.tvs" :key="series.id">
                <div class="series-thumb">
                    <img :src="imgUrl + series.poster_path" alt="">
                    <div class="series-info">
                        <h2>{{ series.name }}</h2>
                        <h4>{{ series.original_name }}</h4>
                        <p>{{ series.original_language }}</p>
                        <p>{{ series.vote_average }}</p>
                        
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
            store
        }
    },

    computed:{
        imgUrl(){
            return this.store.config.IMG_URI
        }
    }
}
</script>

<!-- ****************************************************************************** -->

<style lang="scss" scoped>
li {
    color: white;
}

<<<<<<< HEAD
=======
// .grid {
//     display: grid;
//     grid-template-columns: repeat(5, 1fr);
//     gap: 10px;
// }
>>>>>>> 3547979c9e160095052b0ad935eeec59e3d65a4e
</style>