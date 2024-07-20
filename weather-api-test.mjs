import fetch from 'node-fetch';

const constructURL = (city) => {
    const apiKey = 'b8e46d9adfb7fcf6281e3908b07eae97'; // Your new OpenWeather API key
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
};

const invokeURL = async (city) => {
    const url = constructURL(city);
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Test the function with a city name
invokeURL('New York');