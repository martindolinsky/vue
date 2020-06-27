<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
    import header from "./components/Header.vue";

    export default {
        components: {

            "app-header": header
        }
    };
</script>

<style>
  body {
    margin: 0 auto;
    background-color: whitesmoke;
    font-family: Verdana;
    background-image: url('https://sm.mashable.com/mashable_in/photo/default/nasa-galaxy_9pu4.jpg');
    background-size: cover;
    color: black;
  }

  #app {
    margin: 0 auto;

  }
</style>
