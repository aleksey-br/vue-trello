import { createApp } from "vue";
import { createPinia } from "pinia";
import { VueFire, VueFireAuth } from "vuefire";
import router from "./router";
import { plugin as Slicksort } from "vue-slicksort";
import App from "./App.vue";
import { firebaseApp } from "./firebase.config";

import "normalize.css";
import "./styles/index.css";

const pinia = createPinia();
const app = createApp(App);
app.use(VueFire, {
  firebaseApp,

  modules: [VueFireAuth()],
});
app.use(router);
app.use(pinia);
app.use(Slicksort);
app.mount("#app");
