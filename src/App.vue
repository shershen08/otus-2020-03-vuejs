<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->

  <a href="/#/demo/32/mike">demo</a>
  <a href="/#/">home</a>

<transition name="slide-fade">
   <router-view></router-view>
</transition>

    <!-- <Demo/> -->

    <!-- <HelloWorld 
          v-bind:msg="msgToShow" 
          base="this is base"
          @load="onLoad()"/> -->


          <!-- <edit-window/> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Demo from "./components/Demo.vue";
// import Slider from 'super-slider';

export default {
  name: "App",
  props: ['foo', 'bar'], //export let foo;
  data(){
    return {
      message: 'hello',
      msgToShow: "Welcome to Your Vue.js App"
    }
  },

  methods: {
    onLoad(){
      console.log('child component calls load')
    },
    onRemove(){

    }
  },
  computed: {
    //
  },

  components: {
    // HelloWorld, // 'HelloWorld': HelloWorld
    // Slider, // from package
    // 'basic-slider': Slider //local
    Demo
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
