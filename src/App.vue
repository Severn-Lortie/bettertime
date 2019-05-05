<style>

@font-face {
    font-family: 'Product Sans';
    src: url('./assets/ProductSans-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Product Sans';
    src: url('./assets/ProductSans-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}

.product-sans {
    font-family: 'Product Sans';
}

.heading {
    font-size: 24px;
    font-weight:bold;
}

.sub-heading {
    font-size: 16px;
}

</style>

<template>

<v-app class='white'>
    <app-nav-drawer></app-nav-drawer>
    <app-toolbar></app-toolbar>
    <transition name='fade-transition'>
            <router-view></router-view>
    </transition>
</v-app>

</template>

<script>

import navDrawer from './components/navDrawer.vue';
import toolbar from './components/toolbar.vue';
// This vue component is going to be responsible for all action commits

export default {

  data() {
    return {
      primaryColor: 'amber lighten-3',
      secondaryColor: ''
    }
  },
  methods: {
    
  },
  components: {
    'app-nav-drawer':navDrawer,
    'app-toolbar':toolbar
  },
  created() {
    
  }
}

</script>
