import { useEffect, useState } from 'react';

const WeatherCard = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = 'abed72c205af816804e07d939093dd64'; 

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const pos = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = pos.coords;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch weather');

        const data = await response.json();
        setWeather(data);
      } catch (err) {
        console.error("Error fetching weather:", err);
        setError("Failed to fetch weather data.");
      }
    };

    fetchWeather();
  }, []);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!weather) return <p>Loading weather...</p>;

  return (
    <div className='weatherDiv'>
      <h3>Weather in {weather.name}</h3>
      <p>{weather.weather[0].description}</p>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Feels like: {weather.main.feels_like}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
    </div>
  );
};
export default WeatherCard;
