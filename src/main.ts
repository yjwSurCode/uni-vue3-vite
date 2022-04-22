import { createSSRApp } from "vue";
import App from "./App.vue";
import VueI18n from "vue-i18n";
import uView from "uview-ui";
let i18nConfig = {
  locale: uni.getLocale(),
  // messages
};
import { createI18n } from "vue-i18n";
const i18n = createI18n(i18nConfig);

export function createApp() {
  const app = createSSRApp(App);
  // app.use(i18n)
  // app.use(uView);  //好像不支持 vue3
  return {
    app,
  };
}
