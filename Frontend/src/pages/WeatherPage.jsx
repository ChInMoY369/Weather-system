import { SearchBar, ErrorMessage, RecentSearches } from '../components/ui';
import { WeatherCard, Forecast } from '../components/weather';
import useWeather from '../hooks/useWeather';

const WeatherPage = () => {
  const {
    weatherData,
    forecastData,
    loading,
    refreshing,
    error,
    recentSearches,
    fetchWeatherData,
    refreshWeatherData
  } = useWeather();

  return (
    <div className="container mx-auto py-12 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Weather Dashboard</h1>
      
      <SearchBar onSearch={fetchWeatherData} isLoading={loading} />
      
      <ErrorMessage message={error} />
      
      <RecentSearches searches={recentSearches} onSelect={fetchWeatherData} />
      
      {loading ? (
        <div className="flex justify-center items-center py-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        weatherData && (
          <>
            <WeatherCard 
              data={weatherData} 
              onRefresh={refreshWeatherData} 
              isRefreshing={refreshing} 
            />
            
            <Forecast forecastData={forecastData} />
          </>
        )
      )}
    </div>
  );
};

export default WeatherPage; 