<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img
          src="@/assets/images/pop_animated_logo.png"
          alt="logo popcorn Movie Think"
          width="30"
          class="d-inline-block align-top"
        />
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item px-2">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-ite px-2">
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
// @ is an alias to /src

export default {
  name: "NavBar",
};
</script>
