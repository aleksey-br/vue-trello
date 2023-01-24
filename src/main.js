import { createApp } from "vue";
import { plugin as Slicksort } from "vue-slicksort";
import App from "./App.vue";

import "normalize.css";
import "./styles/index.css";

const app = createApp(App);

app.use(Slicksort);
app.mount("#app");
