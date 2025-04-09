import { formatDate } from '../../utils/dateUtils';

const WeatherCard = ({ data, onRefresh, isRefreshing }) => {
  if (!data) return null;

  const { 
    name, 
    sys, 
    main, 
    weather, 
    wind 
  } = data;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md dark:bg-gray-800">
      <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">{name}, {sys.country}</h2>
          <p className="text-sm">{formatDate(new Date())}</p>
        </div>
        <button 
          onClick={onRefresh} 
          className="p-2 rounded-full hover:bg-blue-600 transition-colors"
          disabled={isRefreshing}
        >
          <svg 
            className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <img 
              src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} 
              alt={weather[0].description} 
              className="w-20 h-20 mr-4"
            />
            <div>
              <h3 className="text-4xl font-bold text-gray-800 dark:text-white">{Math.round(main.temp)}°C</h3>
              <p className="text-gray-600 capitalize dark:text-gray-300">{weather[0].description}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600 dark:text-gray-300">Feels like: {Math.round(main.feels_like)}°C</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Max: {Math.round(main.temp_max)}°C</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Min: {Math.round(main.temp_min)}°C</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-100 p-3 rounded-lg flex items-center dark:bg-gray-700">
            <svg className="w-8 h-8 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Humidity</p>
              <p className="font-semibold text-gray-700 dark:text-gray-300">{main.humidity}%</p>
            </div>
          </div>
          
          <div className="bg-gray-100 p-3 rounded-lg flex items-center dark:bg-gray-700">
            <svg className="w-8 h-8 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Pressure</p>
              <p className="font-semibold text-gray-700 dark:text-gray-300">{main.pressure} hPa</p>
            </div>
          </div>
          
          <div className="bg-gray-100 p-3 rounded-lg flex items-center dark:bg-gray-700">
            <svg className="w-8 h-8 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Visibility</p>
              <p className="font-semibold text-gray-700 dark:text-gray-300">{(data.visibility / 1000).toFixed(1)} km</p>
            </div>
          </div>
          
          <div className="bg-gray-100 p-3 rounded-lg flex items-center dark:bg-gray-700">
            <svg className="w-8 h-8 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Wind</p>
              <p className="font-semibold text-gray-700 dark:text-gray-300">{wind.speed} km/h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard; 