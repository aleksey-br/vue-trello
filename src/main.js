import { createApp } from "vue";
import { createPinia } from "pinia";
import { plugin as Slicksort } from "vue-slicksort";
import App from "./App.vue";

import "normalize.css";
import "./styles/index.css";
const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(Slicksort);
app.mount("#app");
