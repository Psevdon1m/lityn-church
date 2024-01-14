<template>
  <carousel :autoplay="5000" :wrapAround="true">
    <slide v-for="social in socials" :key="social.id">
      <div>
        <img class="image" :src="social.img" />
        <div class="reviews__text">
          {{ lang.get(social.desc) }}
        </div>
        <div class="reviews__author">{{ lang.get(social.type) }}</div>
      </div>
    </slide>

    <template #addons>
      <navigation />
      <!-- <pagination /> -->
    </template>
  </carousel>
</template>

<script>
import MultiLang from "../core/multilang";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      lang: new MultiLang(this),
      socials: [
        {
          id: 1,
          img: "/activities/1.png",
          desc: "ACTIVITY_1_DESC",
          type: "ACTIVITY_1_TYPE",
        },
        {
          id: 2,
          img: "/activities/2.png",
          desc: "ACTIVITY_2_DESC",
          type: "ACTIVITY_2_TYPE",
        },
        {
          id: 3,
          img: "/activities/3.png",
          desc: "ACTIVITY_3_DESC.",
          type: "ACTIVITY_3_TYPE",
        },
        {
          id: 4,
          img: "/activities/4.png",
          desc: "ACTIVITY_4_DESC",
          type: "ACTIVITY_4_TYPE",
        },
      ],
    };
  },
};
</script>

<style>
.carousel__item {
  height: 400px;
  width: 400px;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  /* border: 5px solid white; */
  color: #24205a;
}
.image {
  width: 600px;
  height: 600px;
  border-radius: 10%;
}
@media (max-width: 750px) {
  .image {
    width: 300px;
    height: 300px;
  }
}
</style>
