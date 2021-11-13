import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

try {
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (let registration of registrations) {
      registration.unregister();
    }
  });
} catch (e) {
  alert("shit happens: ", e);
}

createApp(App).use(store).use(router).mount("#app");
