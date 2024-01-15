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
          <form
            class="pb-3 nav__donation"
            method="POST"
            accept-charset="utf-8"
            action="https://www.liqpay.ua/api/3/checkout"
          >
            <input
              type="hidden"
              name="data"
              value="eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXlkb25hdGUiLCJwdWJsaWNfa2V5IjoiaTg3NzU1MTk2NDg1IiwiYW1vdW50IjoiMjUwIiwiY3VycmVuY3kiOiJVQUgiLCJkZXNjcmlwdGlvbiI6ItCU0L7QsdGA0L7QstGW0LvRjNC90ZYg0L/QvtC20LXRgNGC0LLRg9Cy0LDQvdC90Y8iLCJ0eXBlIjoiZG9uYXRlIiwibGFuZ3VhZ2UiOiJydSJ9"
            />
            <input
              type="hidden"
              name="signature"
              value="DdfKKT2uw9j8OFs3vpEkw1SR118="
            />
            <button
              style="
                margin-top: -10px;
                border: medium none !important;
                display: inline-block !important;
                text-align: center !important;
                padding: 3px 8px !important;
                color: rgb(255, 255, 255) !important;
                font-size: 16px !important;
                font-weight: 400 !important;
                font-family: OpenSans, sans-serif;
                cursor: pointer !important;
                border-radius: 2px !important;
                background: rgb(122, 183, 43) none repeat scroll 0% 0% !important;
                opacity: 1;
              "
              onmouseover="this.style.opacity='1';"
              onmouseout="this.style.opacity='1';"
            >
              <!-- <img
                src="https://static.liqpay.ua/buttons/logo-small.png"
                name="btn_text"
                style="
                  margin-right: 7px !important;
                  vertical-align: middle !important;
                "
              /> -->
              <span style="vertical-align:middle; !important">{{
                lang.get("HEADER_DONATION")
              }}</span>
            </button>
          </form>
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
