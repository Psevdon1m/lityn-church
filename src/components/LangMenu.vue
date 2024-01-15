<template>
  <div class="language-switch">
    <select
      v-model="selectedLang"
      id="language"
      @change="changeLanguage($event)"
    >
      <option value="en">EN</option>
      <option value="ua">UA</option>
    </select>
  </div>
</template>

<script>
import MultiLang from "../core/multilang";

export default {
  data: function () {
    return {
      lang: new MultiLang(this),
      selectedLang: "",
    };
  },

  mounted() {
    this.selectedLang = this.getLang();
  },

  methods: {
    changeLanguage(e) {
      this.setLang(e.target.value);
    },
    setLang(lang, event) {
      this.selectedLang = lang;
      this.$store.dispatch("updateLanguage", lang);
      // this.$root.core.setLangForAddress(lang);
    },
    setActiveLang(inputLang) {
      return inputLang === this.selectedLang;
    },

    getLang() {
      return localStorage.getItem("lang") || "ua";
    },
  },
  computed: {},
};
</script>

<style scoped></style>
