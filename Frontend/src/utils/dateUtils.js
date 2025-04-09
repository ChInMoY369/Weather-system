export const formatDate = (date, options = {}) => {
  const defaultOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  };
  
  return new Date(date).toLocaleDateString('en-US', { ...defaultOptions, ...options });
};

export const groupForecastByDay = (forecastList) => {
  if (!forecastList) return {};
  
  return forecastList.reduce((acc, item) => {
    const date = new Date(item.dt * 1000);
    const day = date.toISOString().split('T')[0];
    
    if (!acc[day]) {
      acc[day] = [];
    }
    
    acc[day].push(item);
    return acc;
  }, {});
};

export const findMiddayData = (dayData) => {
  return dayData.reduce((prev, curr) => {
    const prevTime = new Date(prev.dt * 1000).getHours();
    const currTime = new Date(curr.dt * 1000).getHours();
    return Math.abs(currTime - 12) < Math.abs(prevTime - 12) ? curr : prev;
  }, dayData[0]);
}; 