import React, { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';
import './App.css';

const App = () => {
    const [weather, setWeather] = useState(null);

    const constructURL = (city) => {
        const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY; // Access the API key from the environment variable
        return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    };

    const fetchWeather = async (city) => {
        if (!city) return;
        const url = constructURL(city);
        console.log(`Fetching weather data from URL: ${url}`);
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.cod === 200) {
                setWeather(data);
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert('Failed to fetch data');
        }
    };

    return (
        <div className="container">
            <h1>Weather App</h1>
            <WeatherForm onFetchWeather={fetchWeather} />
            <WeatherInfo weather={weather} />
        </div>
    );
};

export default App;