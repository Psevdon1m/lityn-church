<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">
          <!-- <img src="./img/activebox-logo.png" alt="Logo" /> -->
          <h1 style="color: aliceblue">Літин ЄХБ</h1>
        </div>
        <nav class="nav">
          <a href="" class="nav__link">Про нас</a>
          <a href="" class="nav__link">Активності</a>
          <a href="" class="nav__link">Coffee bean</a>
          <a href="" class="nav__link">Персонал</a>
          <a href="" class="nav__link">допомога</a>
        </nav>

        <button class="burger">
          <span class="burger__item">Menu</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  position: absolute;
  z-index: 1000;
  width: 100%;
  top: 0;
  left: 0;
  height: 100px;
}

.header__inner {
  padding: 35px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #515369;
}
</style>
