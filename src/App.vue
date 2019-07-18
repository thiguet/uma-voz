<template>
  <div id="app">
    <my-header :routes="visibleRoutes" />
    <transition name="fade" mode="out-in">  
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import MyHeader from "@/components/composed/MyHeader/MyHeader.vue";
import routes from "@/routes.js"

const visibleRoutes = routes.filter(route => route.isVisible);

export default {
  name: "App",
  components: {
    MyHeader
  },
  data() {
    return ({
      visibleRoutes
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
    /* background-color:#011627;   */
    /* background-color:#ff9f1c; */
    background-color:#F9DBBD;
    overflow-x:hidden;
    overflow-y: overlay;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ed406f;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 0.3s ease-in-out;
  }

  .fade-leave-active {
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
}

/*
  Scroll bar
*/
::-webkit-scrollbar {
  position: fixed;
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1; 
}

::-webkit-scrollbar-thumb {
  background: #888; 
}

::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

</style>
