<!-- 

<VueSlickCarousel v-bind="settings">
    <div class="reviews_items" v-for="social in socials" :key="social.id">
      <img class="review__photo" :src="social.img" />
      <div class="reviews__text">
        {{ social.desc }}
      </div>
      <div class="reviews__author">{{ social.type }}</div>
      s
    </div>
  </VueSlickCarousel> -->

<template>
  <carousel :autoplay="5000" :wrapAround="true">
    <slide v-for="social in socials" :key="social.id">
      <div>
        <img class="image" :src="social.img" />
        <div class="reviews__text">
          {{ social.desc }}
        </div>
        <div class="reviews__author">{{ social.type }}</div>
      </div>
    </slide>

    <template #addons>
      <navigation />
      <!-- <pagination /> -->
    </template>
  </carousel>
</template>

<script>
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
      socials: [
        {
          id: 1,
          img: "/activities/1.png",
          desc: "Церква надає житлову, соціальну та духовну допомогу переселенцям, які знаходять укриття в новому місті.",
          type: "Допомога переселенцям",
        },
        {
          id: 2,
          img: "/activities/2.png",
          desc: "Церква активно сприяє утвердженню сімейних цінностей, організовуючи програми та заходи для розвитку родин і стимулюючи усиновлення дітей.",
          type: "Будинки сімейного типу",
        },
        {
          id: 3,
          img: "/activities/3.png",
          desc: "Церква регулярно проводить зібрання для молоді, спрямовані на їх духовний розвиток, взаємодію та служіння суспільству.",
          type: "Молодіжні зібрання",
        },
        {
          id: 4,
          img: "/activities/4.png",
          desc: "Щотижневі зустрічі за чашкою кави, де учасники обговорюють різні аспекти віри, моралі та сучасних суспільних питань.",
          type: "CoffeeBean",
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
