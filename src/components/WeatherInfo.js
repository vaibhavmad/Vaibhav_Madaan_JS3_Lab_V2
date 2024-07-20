import React from 'react';

const WeatherInfo = ({ weather }) => {
    if (!weather) return null;

    return (
        <div className="weather-info">
            <h2>{weather.name}, {weather.sys.country}</h2>
            <p>{new Date().toLocaleDateString()}</p>
            <div className="temperature">{Math.round(weather.main.temp)}°C</div>
            <p>{weather.weather[0].main}</p>
            <p className="min-max">{weather.main.temp_min}°C / {weather.main.temp_max}°C</p>
        </div>
    );
};

export default WeatherInfo;