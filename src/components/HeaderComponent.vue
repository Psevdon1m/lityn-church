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
            Літин ЄХБ
          </h1>
        </div>
        <nav class="nav" :class="{ active: openBurger }">
          <a href="" class="nav__link">Про нас</a>
          <a href="" class="nav__link">Активності</a>
          <a href="" class="nav__link">Coffee bean</a>
          <a href="" class="nav__link">Персонал</a>
          <a href="" class="nav__link">допомога</a>
        </nav>

        <button
          @click="openBurger = !openBurger"
          class="nav-toggle"
          :class="{ active: openBurger }"
        >
          <span class="nav-toggle__item">Menu</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      openBurger: false,
    };
  },
  mounted() {
    setTimeout(() => {
      let introHeight = document.getElementById("intro").clientHeight;
      let offsetScroll = 0;
      let header = document.getElementsByClassName("header")[0];

      window.addEventListener("scroll", () => {
        offsetScroll = window.scrollY;
        console.log({ offsetScroll, introHeight });
        if (offsetScroll > introHeight) {
          header.classList.add("fixed");
        } else {
          header.classList.remove("fixed");
        }
      });
    }, 1000);
  },
};
</script>
