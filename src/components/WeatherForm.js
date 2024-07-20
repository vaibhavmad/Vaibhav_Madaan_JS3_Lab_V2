import React, { useState } from 'react';

const WeatherForm = ({ onFetchWeather }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            onFetchWeather(city);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Search for a city..." 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
            />
        </form>
    );
};

export default WeatherForm;