import { fetchWeather } from "./APIservice.js";
import {
  renderWidjetForecast,
  renderWidjetOther,
  renderWidjetToday,
} from "./render.js";

export const startWidjet = async () => {
  const widjet = document.createElement("div");
  widjet.classList.add("widget");

  const dataWeather = await fetchWeather("Astana");
  if (dataWeather.succes) {
    renderWidjetToday(widjet, dataWeather.data);
    renderWidjetOther(widjet, dataWeather.data);
  } else {
    showError();
  }

  renderWidjetForecast(widjet);

  return widjet;
};
