<template>
  <div class="intro" id="intro">
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
          class="btn btn--blue"
          target="_blank"
          id="personal"
          >Знайти нас</a
        >
      </div>
    </div>
  </div>

  <section class="section section--clients">
    <div class="container">
      <div class="section__header">
        <h3 class="section__suptitle">Персонал Церкви</h3>
        <h2 class="section__title">
          Ці особи разом творять спільноту вірних, яка росте в глибокій вірі та
          взаємопідтримці в межах церкви.
        </h2>
      </div>

      <div class="clients">
        <div class="clients__item">
          <img
            class="clients__photo"
            src="../assets/images/people/1.png"
            alt=""
          />
          <div class="clients__name">Іван Іванов</div>
          <div class="clients__prof">Пастор Церкви</div>
          <div class="clients__text">
            З преданістю провідник духовного спільноти, Пастор Іван служить як
            духовний наставник і керівник церковної громади. Його навчання та
            водночас ласкаве пастирство роблять церкву місцем зростання віри.
          </div>
        </div>
        <div class="clients__item">
          <img
            class="clients__photo"
            src="../assets/images/people/2.png"
            alt=""
          />
          <div class="clients__name">Наталія Петрівна</div>
          <div class="clients__prof">Директор служби покращення громади</div>
          <div class="clients__text">
            Наталія координує та сприяє службі, спрямованій на розвиток громади
            та покращення життя її членів. Завдяки її роботі, церква стає не
            лише місцем віруючих, але і центром взаємодії та підтримки.
          </div>
        </div>
        <div class="clients__item">
          <img
            class="clients__photo"
            src="../assets/images/people/3.png"
            alt=""
          />
          <div class="clients__name">Михайло Сергійович</div>
          <div class="clients__prof">Молодіжний лідер</div>
          <div class="clients__text">
            Михайло відзначається ентузіазмом та здібностями в організації
            заходів для молоді. Його ведення молодіжних зібрань та подій робить
            церкву привабливою для молоді та стимулює їхній розвиток віри.
          </div>
        </div>
        <div class="clients__item">
          <img
            class="clients__photo"
            src="../assets/images/people/4.png"
            alt=""
          />
          <div class="clients__name">Ольга Анатоліївна</div>
          <div class="clients__prof">
            Координатор служби молитви та поклоніння
          </div>
          <div class="clients__text" id="activities">
            Ольга відповідає за координацію та лідерство в службі молитви та
            поклоніння. Її приносить велике значення до церковного життя,
            створюючи атмосферу поглибленого спілкування з Богом через молитву
            та поклоніння.
          </div>
        </div>
      </div>
    </div>
    <!---container--->
  </section>

  <div class="section">
    <div class="container">
      <div class="section__header">
        <h3 class="section__suptitle">Соціальна Активність Церкви</h3>
      </div>
      <div class="reviews">
        <VueSlickCarousel :arrows="true" :dots="false" />
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "Home",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      socials: [
        {
          id: 1,
          img: "",
          desc: "Церква надає житлову, соціальну та духовну допомогу переселенцям, які знаходять укриття в новому місті.",
          type: "Допомога переселенцям",
        },
        // {
        //   id: 2,
        //   img: "",
        //   desc: "Церква активно сприяє утвердженню сімейних цінностей, організовуючи програми та заходи для розвитку родин і стимулюючи усиновлення дітей.",
        //   type: "Будинки сімейного типу",
        // },
        // {
        //   id: 3,
        //   img: "",
        //   desc: "Церква регулярно проводить зібрання для молоді, спрямовані на їх духовний розвиток, взаємодію та служіння суспільству.",
        //   type: "Молодіжні зібрання",
        // },
        // {
        //   id: 4,
        //   img: "",
        //   desc: "Щотижневі зустрічі за чашкою кави, де учасники обговорюють різні аспекти віри, моралі та сучасних суспільних питань.",
        //   type: "CoffeeBean",
        // },
      ],
    };
  },
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
