<template>
  <div id="app">
    <Header />
    <Home />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/HeaderComponent.vue";
import Home from "./components/Home.vue";
import Footer from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    Header,
    Home,
    Footer,
  },
};
</script>

<style></style>
