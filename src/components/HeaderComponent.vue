<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">
          <!-- <img src="./img/activebox-logo.png" alt="Logo" /> -->
          <h1
            style="
              color: aliceblue;
              text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
            "
          >
            <a href="#intro" style="color: aliceblue; text-decoration: none">{{
              lang.get("HEADER_LOGO")
            }}</a>
          </h1>
        </div>
        <nav class="nav" :class="{ active: openBurger }">
          <a href="" class="nav__link">{{ lang.get("HEADER_ABOUT_US") }}</a>
          <a href="#activities" class="nav__link" @click="openBurger = false">{{
            lang.get("HEADER_ACTIVITIES")
          }}</a>
          <a href="" class="nav__link">Coffee bean</a>
          <a href="#personal" class="nav__link" @click="openBurger = false">{{
            lang.get("HEADER_PERSONAL")
          }}</a>
          <a href="" class="nav__link">{{ lang.get("HEADER_DONATION") }}</a>
          <lang-menu class="nav__link" />
        </nav>

        <button
          @click="openBurger = !openBurger"
          class="nav-toggle"
          :class="{ active: openBurger }"
        >
          <span class="nav-toggle__item">{{ lang.get("HEADER_MENU") }}</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import Multilang from "../core/multilang";
import LangMenu from "./LangMenu.vue";
export default {
  name: "Header",
  data() {
    return {
      lang: new Multilang(this),
      openBurger: false,
    };
  },
  mounted() {
    this.lang.init();
    setTimeout(() => {
      this.checkPosition(window.scrollY);
      window.addEventListener("scroll", () => {
        this.checkPosition(window.scrollY);
      });
    }, 500);
  },
  methods: {
    checkPosition(offsetScroll) {
      let introHeight = document.getElementById("intro").clientHeight;
      let header = document.getElementsByClassName("header")[0];
      if (offsetScroll >= introHeight - 90) {
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
      }
    },
  },
  components: { LangMenu },
};
</script>
