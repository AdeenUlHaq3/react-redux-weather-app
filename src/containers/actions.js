import axios from 'axios';

const API_KEY = '1da84e4ce8c59a2f9ad109cfdaa130eb';
const ROOT_URL = `https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const Fetch_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},pk`;
    const request = axios.get(url, true);
    request.then(res => res.json()).then(res => console.log(res));
    
    return {
        type: Fetch_WEATHER,
        payload: request
    };
}