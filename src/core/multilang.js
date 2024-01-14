import lang from "../assets/lang/lang.json";

export default class MultiLang {
  constructor(vueContext) {
    this.store = vueContext.$store;
  }

  init() {
    let lang = localStorage.getItem("lang");
    if (lang) {
      this.store.dispatch("updateLanguage", lang);
    } else {
      this.store.dispatch("updateLanguage", "en");
    }
  }

  get(key, sourceKey = "lang", replacements = {}) {
    let source = lang;

    let langKey = this.store.getters["getLanguage"];
    if (langKey && source[langKey][key]) {
      let value = source[langKey][key];
      for (let replacement in replacements) {
        value = value.split(`[${replacement}]`).join(replacements[replacement]);
      }

      return value;
    }

    return "";
  }

  getTranslationsData() {
    return lang;
  }
}

String.prototype.ucfirst = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
