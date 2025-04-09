import { useState, useEffect } from 'react';
import { getWeatherData, getForecastData } from '../services/weatherService';
import useLocalStorage from './useLocalStorage';

const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');
  const [recentSearches, setRecentSearches] = useLocalStorage('recentSearches', []);

  useEffect(() => {
    const loadInitialWeather = async () => {
      if (recentSearches && recentSearches.length > 0) {
        console.log("Loading most recent search:", recentSearches[0]);
        await fetchWeatherData(recentSearches[0]);
      } else {
        console.log("Loading default city: London");
        await fetchWeatherData("London");
      }
    };
    
    loadInitialWeather();
  }, []);

  const addToRecentSearches = (city) => {
    setRecentSearches(prev => {
      const filtered = prev.filter(item => item.toLowerCase() !== city.toLowerCase());
      return [city, ...filtered].slice(0, 5);
    });
  };

  const fetchWeatherData = async (city) => {
    console.log("Fetching weather data for:", city);
    setLoading(true);
    setError('');
    
    try {
      const weather = await getWeatherData(city);
      console.log("Weather API response:", weather);
      setWeatherData(weather);
      
      const forecast = await getForecastData(city);
      console.log("Forecast API response:", forecast);
      setForecastData(forecast);
      
      addToRecentSearches(city);
    } catch (error) {
      console.error("API Error:", error);
      setError(error.message);
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setLoading(false);
    }
  };

  const refreshWeatherData = async () => {
    if (!weatherData || !weatherData.name) return;
    
    setRefreshing(true);
    try {
      const weather = await getWeatherData(weatherData.name);
      console.log("Refreshed weather data:", weather);
      setWeatherData(weather);
      
      const forecast = await getForecastData(weatherData.name);
      console.log("Refreshed forecast data:", forecast);
      setForecastData(forecast);
    } catch (error) {
      console.error("Refresh error:", error);
      setError(error.message);
    } finally {
      setRefreshing(false);
    }
  };

  return {
    weatherData,
    forecastData,
    loading,
    refreshing,
    error,
    recentSearches,
    fetchWeatherData,
    refreshWeatherData
  };
};

export default useWeather; 