import { createApp } from "vue";
import { createPinia } from "pinia";
import { VueFire, VueFireAuth } from "vuefire";
import router from "./router";
import Popper from "vue3-popper";
import { plugin as Slicksort } from "vue-slicksort";
import { vfmPlugin } from "vue-final-modal";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import App from "./App.vue";
import { firebaseApp } from "./firebase.config";

import "normalize.css";
import "./styles/index.css";

const toastOptions = {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true,
};

const pinia = createPinia();
const app = createApp(App);
app.use(VueFire, {
  firebaseApp,

  modules: [VueFireAuth()],
});
app.use(router);
app.use(pinia);
app.use(
  vfmPlugin({
    key: "$vfm",
    componentName: "vueModal",
  }),
);
app.use(Toast, toastOptions);
app.use(Slicksort);
app.component("popper-app", Popper);
app.mount("#app");
