<template>
  <div >
    <Header @onSearch="fetchItems" />
    <Main />
  </div>
</template>

<!-- ****************************************************************************** -->

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';

import axios from 'axios'
import store from './store'

export default {
  components: {
    Header,
    Main
  },

  data() {
    return {
      store,
    }
  },

  methods: {
    fetchItems() {
      this.fetchFilm()
      this.fetchSeries()
    },

    fetchFilm() {
      const url = this.store.config.MAIN_URI + '/search/movie'
      axios.get(url, {
        params: {
          api_key: this.apiKey,
          query: this.search,
          // query: 'jurassic',
          language: 'it-IT'
        }
      }).then((res) => {
        const { results } = res.data
        this.store.movies = results
        console.log(this.store.movies)
      }).catch(err => {
        this.store.movies = []
      })
    },

    fetchSeries() {
      const url = this.store.config.MAIN_URI + '/search/tv'
      axios.get(url, {
        params: {
          api_key: this.apiKey,
          query: this.search,
          language: 'it-IT'
        }
      }).then((res) => {
        const { results } = res.data
        this.store.tvs = results
        console.log(this.store.tvs)
      }).catch(err => {
        this.store.movies = []
      })
    },

    
  },

  computed: {
    apiKey() {
      return this.store.config.API_KEY
    },

    main_URI() {
      return this.store.config.MAIN_URI
    },

    search() {
      return this.store.search
    },

    moviesEndpoint() {
      return this.BASE_URI + '/search/movie'
    }
  },

  created() {
    console.log(this.results)

  },

}
</script>

<!-- ****************************************************************************** -->

<style lang="scss">
@use './style/general.scss' as *;
</style>