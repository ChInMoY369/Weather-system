# Weather Dashboard

A modern, responsive weather application that allows users to search for weather information by city. Built with React and Tailwind CSS.

## Features

- 🔍 City search: Search for any city to view its current weather information
- 🔔 Live weather data: Get real-time weather updates from OpenWeatherMap API
- 📱 Responsive design: Works on both mobile and desktop devices
- 🔄 Refresh button: Manually refresh weather data
- 🕒 Recent searches: Displays the last 5 searched cities
- 🌙 Dark/Light theme toggle: Switch between dark and light modes
- 📊 5-Day Forecast: View weather predictions for the next 5 days

## Tech Stack

- **Framework**: React (Vite)
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **State Management**: React Hooks
- **Data Persistence**: LocalStorage
- **API**: OpenWeatherMap API

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Configure the API Key:
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api) to get your API key
   - Open `src/services/weatherService.js` and replace the empty string in `const API_KEY = '';` with your API key

4. Start the development server:
   ```
   npm run dev
   ```

## API Integration Details

This application uses the following OpenWeatherMap API endpoints:

- Current Weather API: `https://api.openweathermap.org/data/2.5/weather`
- 5-Day/3-Hour Forecast API: `https://api.openweathermap.org/data/2.5/forecast`

**Rate Limits**: The free tier of OpenWeatherMap API has a limit of 60 calls per minute or 1,000,000 calls per month.

## Deployment

This project is configured to be easily deployed on Vercel, Netlify, or GitHub Pages.

## License

This project is open source and available under the MIT License.
