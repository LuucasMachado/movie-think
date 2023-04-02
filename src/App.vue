<template>
  <NavBar />
  <div class="container-fluid p-3">
    <router-view/>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue';
  export default {
    components: {
      NavBar
    },
  }
</script>