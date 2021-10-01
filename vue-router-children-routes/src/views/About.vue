<template>
  <div class="about">
    <h1>This is an about page string: {{ $route.params.something }}</h1>

    <div id="nav">
      <router-link :to="{ name: 'AboutMe' }">Me</router-link>
      <router-link :to="{ name: 'AboutDog' }">Dog</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

