import { groupForecastByDay, findMiddayData, formatDate } from '../../utils/dateUtils';

const Forecast = ({ forecastData }) => {
  if (!forecastData || !forecastData.list) return null;

  const groupedByDay = groupForecastByDay(forecastData.list);

  const daysData = Object.keys(groupedByDay)
    .slice(0, 5)
    .map(day => {
      const dayData = groupedByDay[day];
      const middayData = findMiddayData(dayData);

      return {
        day,
        temp: middayData.main.temp,
        weather: middayData.weather[0],
        dayName: formatDate(day, { weekday: 'short' })
      };
    });

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md mt-6 dark:bg-gray-800">
      <div className="bg-blue-500 text-white p-4">
        <h3 className="font-semibold">5-Day Forecast</h3>
      </div>
      <div className="p-4 grid grid-cols-5 gap-2">
        {daysData.map((day, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{day.dayName}</p>
            <img 
              src={`https://openweathermap.org/img/wn/${day.weather.icon}.png`} 
              alt={day.weather.description} 
              className="w-10 h-10"
            />
            <p className="text-lg font-bold dark:text-white">{Math.round(day.temp)}°C</p>
            <p className="text-xs text-gray-500 text-center capitalize dark:text-gray-400">{day.weather.main}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast; 