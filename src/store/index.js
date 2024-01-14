import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    lang: "ua",
    notifications: [],
  },
  mutations: {
    push_notification(state, notification) {
      const isMessageUnique = state.notifications.findIndex(
        (el) => el.message.toLowerCase() === notification.message.toLowerCase()
      );
      if (isMessageUnique < 0) {
        state.notifications.push({
          ...notification,
          id: (Math.random().toString(36) + Date.now().toString(36)).substr(2),
        });
      }
    },
    clear_notifications(state, data) {
      state.notifications = data;
    },
    remove_notification(state, notificationToRemove) {
      state.notifications = state.notifications.filter(
        (notification) => notification.id != notificationToRemove.id
      );
    },
    setLanguage(state, lang) {
      state.lang = lang;
    },
  },
  actions: {
    updateLanguage({ commit }, lang) {
      commit("setLanguage", lang);
      localStorage.setItem("lang", lang);
    },
  },
  getters: {
    getLanguage(state) {
      return state.lang;
    },
  },
  modules: {},
});
