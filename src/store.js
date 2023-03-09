import {reactive} from 'vue'

const store = reactive ({
    movies: [],
    tvs:[],
    search:'',

    config:{
        API_KEY: '73da7b7926084309d0c522cac935636c',
        MAIN_URI: 'https://api.themoviedb.org/3',
        IMG_URI: 'https://image.tmdb.org/t/p/w342'
    }
})

export default store