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

.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
}
</style>