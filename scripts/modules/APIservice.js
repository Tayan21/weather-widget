const API_URL = "https://api.openweathermap.org/data/2.5/";
const API_KEY = "9da208b5c62dc6aa0f405dc576d7b8f5";

export const fetchWeather = async (city) => {
  try {
    const response = await fetch(
      `${API_URL}weather?q=${city}&appid=${API_KEY}&lang=ru`
    );
    if (!response.ok) {
        throw new Error('response error')
    }    
    const data = await response.json();
    return { succes: true, data };
  } catch {
    return { succes: false, err };
  }
};
