<template>
  <div id="app">
    <my-header :routes="routes" />
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from "@/components/composed/MyHeader/MyHeader.vue";
import routes from "@/routes.js"

export default {
  name: "App",
  components: {
    MyHeader
  },
  data() {
    return ({
      routes
    });
  }
}

</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Raleway');

  body {
    font-family: 'Raleway', 'Avenir', Helvetica, Arial, sans-serif; 
    border: none;
    margin: auto;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
