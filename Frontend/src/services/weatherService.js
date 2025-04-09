import axios from 'axios';
import { API_KEY, BASE_URL, UNITS } from '../constants/config';

export const getWeatherData = async (city) => {
  try {
    console.log("Weather API Request:", `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=${UNITS}`);
    
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: UNITS
      }
    });
    
    console.log("Weather API Response Status:", response.status);
    return response.data;
  } catch (error) {
    console.error("Weather API Error:", error);
    
    if (error.response) {
      console.error("Response error data:", error.response.data);
      console.error("Response error status:", error.response.status);
      const errorMessage = error.response.data.message || 'Failed to fetch weather data';
      throw new Error(errorMessage);
    } else if (error.request) {
      console.error("Request error:", error.request);
      throw new Error('No response from weather server. Check your internet connection.');
    } else {
      console.error("Error message:", error.message);
      throw new Error('Error setting up weather request: ' + error.message);
    }
  }
};

export const getForecastData = async (city) => {
  try {
    console.log("Forecast API Request:", `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=${UNITS}`);
    
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        appid: API_KEY,
        units: UNITS
      }
    });
    
    console.log("Forecast API Response Status:", response.status);
    return response.data;
  } catch (error) {
    console.error("Forecast API Error:", error);
    
    if (error.response) {
      console.error("Response error data:", error.response.data);
      console.error("Response error status:", error.response.status);
      const errorMessage = error.response.data.message || 'Failed to fetch forecast data';
      throw new Error(errorMessage);
    } else if (error.request) {
      console.error("Request error:", error.request);
      throw new Error('No response from forecast server. Check your internet connection.');
    } else {
      console.error("Error message:", error.message);
      throw new Error('Error setting up forecast request: ' + error.message);
    }
  }
}; 