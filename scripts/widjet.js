import { fetchWeather } from "./modules/APIservice.js";
import { startWidjet } from "./modules/widjetService.js";

const initWidjet = async (app) => {
  const widget = await startWidjet();
  app.append(widget);

  fetchWeather('Astana');
};

initWidjet(document.querySelector('#app'));