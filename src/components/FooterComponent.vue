<template>
  <footer class="footer" id="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__block">
          <h4 class="footer__title">{{ lang.get("FOOTER_ADDRESS") }}</h4>
          <a
            href="https://maps.app.goo.gl/nV1YghTpbqRz99MP7"
            style="text-decoration: none"
            target="_blank"
          >
            <address class="footer__address">
              <div>Богдана Хмельницького 19</div>
              <div>Літин, Вінницька область, 22300</div>
            </address>
          </a>

          <div>
            <h4 class="footer__title">{{ lang.get("FOOTER_SUBSCRIBE") }}</h4>
            <div class="social social--footer">
              <a
                href="https://www.facebook.com/profile.php?id=100070121663393"
                class="social__item"
                target="_blank"
              >
                <i class="fab fa-facebook-f"></i>
              </a>

              <a
                href="https://www.instagram.com/ehb_lityn/"
                target="_blank"
                class="social__item"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/@user-ti8eh5kn6w"
                target="_blank"
                class="social__item"
              >
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="footer__block">
          <form
            class="pb-3"
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
                border: medium none !important;
                display: inline-block !important;
                text-align: center !important;
                padding: 7px 20px !important;
                color: rgb(255, 255, 255) !important;
                font-size: 16px !important;
                font-weight: 600 !important;
                font-family: OpenSans, sans-serif;
                cursor: pointer !important;
                border-radius: 2px !important;
                background: rgb(122, 183, 43) none repeat scroll 0% 0% !important;
                opacity: 1;
              "
              onmouseover="this.style.opacity='0.5';"
              onmouseout="this.style.opacity='1';"
            >
              <img
                src="https://static.liqpay.ua/buttons/logo-small.png"
                name="btn_text"
                style="
                  margin-right: 7px !important;
                  vertical-align: middle !important;
                "
              />
              <span style="vertical-align:middle; !important">{{
                lang.get("FOOTER_DONATIONS")
              }}</span>
            </button>
          </form>
        </div>

        <div class="footer__block">
          <div class="footer__col">
            <div class="footer__title">{{ lang.get("FOOTER_INSTA_FOR") }}</div>

            <div class="instagram">
              <a
                class="instagram__item"
                href="https://www.instagram.com/p/C1eZ3ZbNF3L/"
                target="_blank"
                ><img src="../assets/images/instagram/1.png" alt=""
              /></a>
              <a
                class="instagram__item"
                href="https://www.instagram.com/p/C06jirON5VC/"
                target="_blank"
                ><img src="../assets/images/instagram/2.png" alt=""
              /></a>
              <a
                class="instagram__item"
                href="https://www.instagram.com/p/C0D5YFwtBHl/"
                target="_blank"
                ><img src="../assets/images/instagram/3.png" alt=""
              /></a>
              <a
                class="instagram__item"
                href="https://www.instagram.com/p/CzgBQP2tXum/"
                target="_blank"
                ><img src="../assets/images/instagram/4.png" alt=""
              /></a>
              <a
                class="instagram__item"
                href="https://www.instagram.com/p/Cy75wyLNjMP/"
                target="_blank"
                ><img src="../assets/images/instagram/5.png" alt=""
              /></a>
              <a
                class="instagram__item"
                href="https://www.instagram.com/p/CwrSykmtyYJ/"
                target="_blank"
                ><img src="../assets/images/instagram/6.png" alt=""
              /></a>
              <a
                class="instagram__item"
                href="https://www.instagram.com/p/CvRkq-ftODw/"
                target="_blank"
                ><img src="../assets/images/instagram/7.png" alt=""
              /></a>
              <a
                class="instagram__item"
                href="https://www.instagram.com/p/CtlUMA_toRY/"
                target="_blank"
                ><img src="../assets/images/instagram/8.png" alt=""
              /></a>
              <a
                class="instagram__item"
                href="https://www.instagram.com/p/CsvFYkdr2L5/"
                target="_blank"
                ><img src="../assets/images/instagram/9.png" alt=""
              /></a>
            </div>
            <div class="more__photos">
              <a
                href="https://www.instagram.com/coffeebeanlityn/"
                target="_blank"
                >{{ lang.get("FOOTER_MORE_PHOTO") }}</a
              >
            </div>
          </div>
        </div>
      </div>
      <!--footer__inner-->
    </div>
    <!--container-->

    <div class="copyright">
      <div class="container">
        <div class="copyright__text">
          <div>Copyright 2024 Lityn Church. All Rights Reserved</div>
          <div>Made <span>by Valentyn Oliinyk</span></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Multilang from "../core/multilang";

export default {
  data() {
    return {
      lang: new Multilang(this),
    };
  },
  mounted() {
    this.lang.init();
  },
};
</script>
