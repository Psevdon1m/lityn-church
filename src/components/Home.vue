<template>
  <div class="intro">
    <div class="container">
      <div class="intro__inner">
        <h1 class="intro__title">
          Відкрийте для себе глибину віри та дружби в нашій церкві.
        </h1>
        <!-- <h2 class="intro__subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          voluptatum voluptas corrupti! Totam, quia aut!
        </h2> -->

        <a
          href="https://maps.app.goo.gl/nV1YghTpbqRz99MP7"
          class="btn btn--red"
          target="_blank"
          >Знайти нас</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.section-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

section {
  background-color: #f8f9fa;
  padding: 40px 0;
  border-bottom: 1px solid #e9ecef;
}

h2 {
  color: #343a40;
}

p {
  color: #6c757d;
}

#google-map {
  height: 300px; /* Adjust the height as needed */
  margin-top: 20px;
  /* Add more styling for the map container if needed */
}
</style>
