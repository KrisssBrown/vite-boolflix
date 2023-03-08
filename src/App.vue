<template>
  <div>
    <Header />
    <Main />

    

    <main>

    </main>
  </div>
</template>

<!-- ****************************************************************************** -->

<script>
import Header from './components/Header.vue';
import axios from 'axios'

import Main from './components/Main.vue';

  export default {
    components:{
      Header,
      Main
    },

    data(){
      return{
        filmCards: [],
      }
    },

    methods:{
      fetchFilm(){
        axios.get(` https://api.themoviedb.org/3/search/movie?api_key=73da7b7926084309d0c522cac935636c&query` , {
        params: {
          
        }
      }).then((res) => {
        // this.filmCards = res.data.data
        console.log(res)
      })
      }
    },

    created(){

    }
    
  }
</script>

<!-- ****************************************************************************** -->

<style lang="scss">
@use './style/general.scss' as *;

</style>