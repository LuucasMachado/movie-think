<template>
  <div class="container">
    <div class="d-flex flex-wrap justify-content-center h-100">
      <div v-for="item in movies.results" :key="item.id" class="m-4">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" :src="item.primaryImage?.url" v-if="item.primaryImage?.url">
          <img class="card-img-top" src="@/assets/images/movie-default.jpeg" v-else>
          <div class="card-body">
            <h5 class="card-title">{{ item.titleText?.text }}</h5>
            <p class="card-text"><strong>Dia do lançamento:</strong> {{ item.releaseDate.day }} /  {{ item.releaseDate.month }} /  {{ item.releaseDate.year }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import movieService from '../service/moviesService';

export default {
  name: 'HomeView',
  data() {
    return {
      movies: []
    }
  },
  mounted() {
    movieService.fetchMovies()
      .then(response => {
        console.log(response.data)
        this.movies = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
}
</script>
