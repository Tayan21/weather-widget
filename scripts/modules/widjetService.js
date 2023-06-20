import { renderWidjetForecast, renderWidjetOther, renderWidjetToday } from "./render.js";

export const startWidjet = () => {
    const widjet = document.createElement('div');
    widjet.classList.add('widget');

    renderWidjetToday(widjet);
    renderWidjetOther(widjet);
    renderWidjetForecast(widjet);

    return widjet;
}