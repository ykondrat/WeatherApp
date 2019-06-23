// Config
import { API_WEATHER_URL, API_WEATHER_KEY } from '../../../config';

export class Weather {

    async getDailyForecast ({ city, country }) {
        const response = await fetch(
            `${API_WEATHER_URL}/forecast?q=${city},${country}&appid=${API_WEATHER_KEY}`);

        const data = await response.json();

        if (response.status !== 200) {
            throw new Error(response.message);
        }

        return data;
    }

    async getCurrentWeather ({ city, country }) {
        const response = await fetch(
            `${API_WEATHER_URL}/weather?q=${city},${country}&appid=${API_WEATHER_KEY}`);
        const data = await response.json();

        if (response.status !== 200) {
            throw new Error(response.message);
        }

        return data;
    }

}
