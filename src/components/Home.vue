<template>
  <div class="intro" id="intro">
    <div class="container">
      <div class="intro__inner">
        <h1 class="intro__title">
          {{ lang.get("HOME_TITLE") }}
        </h1>
        <!-- <h2 class="intro__subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          voluptatum voluptas corrupti! Totam, quia aut!
        </h2> -->

        <a
          href="https://maps.app.goo.gl/nV1YghTpbqRz99MP7"
          class="btn btn--blue"
          target="_blank"
          id="personal"
          >{{ lang.get("HOME_FIND_US") }}</a
        >
      </div>
    </div>
  </div>

  <section class="section section--clients">
    <div class="container">
      <div class="section__header">
        <h3 class="section__suptitle">{{ lang.get("HOME_PERSONAL") }}</h3>
        <h2 class="section__title">
          {{ lang.get("HOME_PERSONAL_DESC") }}
        </h2>
      </div>

      <div class="clients">
        <div class="clients__item">
          <img
            class="clients__photo"
            src="../assets/images/people/1.png"
            alt=""
          />
          <div class="clients__name">{{ lang.get("STAFF_NAME_1") }}</div>
          <div class="clients__prof">{{ lang.get("STAFF_POSITION_1") }}</div>
          <div class="clients__text">
            {{ lang.get("STAFF_DESC_1") }}
          </div>
        </div>
        <div class="clients__item">
          <img
            class="clients__photo"
            src="../assets/images/people/2.png"
            alt=""
          />
          <div class="clients__name">{{ lang.get("STAFF_NAME_2") }}</div>
          <div class="clients__prof">{{ lang.get("STAFF_POSITION_2") }}</div>
          <div class="clients__text">
            {{ lang.get("STAFF_DESC_2") }}
          </div>
        </div>
        <div class="clients__item">
          <img
            class="clients__photo"
            src="../assets/images/people/3.png"
            alt=""
          />
          <div class="clients__name">{{ lang.get("STAFF_NAME_3") }}</div>
          <div class="clients__prof">{{ lang.get("STAFF_POSITION_3") }}</div>
          <div class="clients__text">
            {{ lang.get("STAFF_DESC_3") }}
          </div>
        </div>
        <div class="clients__item">
          <img
            class="clients__photo"
            src="../assets/images/people/4.png"
            alt=""
          />
          <div class="clients__name">{{ lang.get("STAFF_NAME_4") }}</div>
          <div class="clients__prof">
            {{ lang.get("STAFF_POSITION_4") }}
          </div>
          <div class="clients__text" id="activities">
            {{ lang.get("STAFF_DESC_4") }}
          </div>
        </div>
      </div>
    </div>
    <!---container--->
  </section>

  <div class="section">
    <div class="container">
      <div class="section__header">
        <h3 class="section__suptitle">{{ lang.get("SOCIAL_ACTIVITIES") }}</h3>
      </div>
      <div class="reviews">
        <SocialCarousel />
      </div>
    </div>
  </div>
</template>

<script>
import MultiLang from "../core/multilang";
import SocialCarousel from "./SocialCarousel.vue";
export default {
  name: "Home",
  components: {
    SocialCarousel,
  },
  data() {
    return {
      lang: new MultiLang(this),
    };
  },
};
</script>
