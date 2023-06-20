import { startWidjet } from "./modules/widjetService.js";

const initWidjet = (app) => {
  const widget = startWidjet();
  app.append(widget);
};

initWidjet(document.querySelector('#app'));