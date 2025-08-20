// Types for Open-Meteo API response
interface OpenMeteoResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: {
    time: string;
    interval: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    apparent_temperature: string;
    is_day: string;
    precipitation: string;
    rain: string;
    showers: string;
    snowfall: string;
    weather_code: string;
    cloud_cover: string;
    wind_speed_10m: string;
    wind_direction_10m: string;
    surface_pressure: string;
  };
  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    is_day: number;
    precipitation: number;
    rain: number;
    showers: number;
    snowfall: number;
    weather_code: number;
    cloud_cover: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    surface_pressure: number;
  };
}

export interface WeatherData {
  temperature: number;
  condition: string;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string;
  location: string;
  feelsLike: number;
  pressure: number;
  isDay: boolean;
  timestamp: number;
}

// Map WMO Weather Interpretation Codes (https://open-meteo.com/en/docs)
const mapWeatherCondition = (weatherCode: number, isDay: boolean): { condition: string; icon: string; description: string } => {
  // Clear sky
  if (weatherCode === 0) {
    return { 
      condition: 'clear', 
      icon: isDay ? '☀️' : '🌙',
      description: 'Clear sky'
    };
  }
  
  // Mainly clear, partly cloudy, and overcast
  if (weatherCode === 1) {
    return {
      condition: 'clear',
      icon: isDay ? '🌤️' : '🌙',
      description: 'Mainly clear'
    };
  }
  
  if (weatherCode === 2) {
    return {
      condition: 'clouds',
      icon: isDay ? '⛅' : '☁️',
      description: 'Partly cloudy'
    };
  }
  
  if (weatherCode === 3) {
    return {
      condition: 'clouds',
      icon: '☁️',
      description: 'Overcast'
    };
  }
  
  // Fog and depositing rime fog
  if (weatherCode >= 45 && weatherCode <= 48) {
    return {
      condition: 'clouds',
      icon: '🌫️',
      description: 'Foggy'
    };
  }
  
  // Drizzle
  if (weatherCode >= 51 && weatherCode <= 57) {
    return {
      condition: 'rain',
      icon: '🌧️',
      description: 'Drizzle'
    };
  }
  
  // Freezing Drizzle
  if (weatherCode >= 56 && weatherCode <= 57) {
    return {
      condition: 'snow',
      icon: '🌨️',
      description: 'Freezing drizzle'
    };
  }
  
  // Rain
  if (weatherCode >= 61 && weatherCode <= 65) {
    return {
      condition: 'rain',
      icon: '🌧️',
      description: 'Rain'
    };
  }
  
  // Freezing Rain
  if (weatherCode >= 66 && weatherCode <= 67) {
    return {
      condition: 'snow',
      icon: '❄️',
      description: 'Freezing rain'
    };
  }
  
  // Snow fall
  if (weatherCode >= 71 && weatherCode <= 77) {
    return {
      condition: 'snow',
      icon: '❄️',
      description: 'Snowfall'
    };
  }
  
  // Rain showers
  if (weatherCode >= 80 && weatherCode <= 82) {
    return {
      condition: 'rain',
      icon: '🌧️',
      description: 'Rain showers'
    };
  }
  
  // Snow showers
  if (weatherCode === 85 || weatherCode === 86) {
    return {
      condition: 'snow',
      icon: '❄️',
      description: 'Snow showers'
    };
  }
  
  // Thunderstorm
  if (weatherCode >= 95 && weatherCode <= 99) {
    return {
      condition: 'thunderstorm',
      icon: '⛈️',
      description: 'Thunderstorm'
    };
  }
  
  // Default to clear weather
  return {
    condition: 'clear',
    icon: isDay ? '☀️' : '🌙',
    description: 'Clear'
  };
};

const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes cache
let weatherCache: { data: WeatherData; timestamp: number } | null = null;

export const fetchWeatherData = async (): Promise<WeatherData> => {
  // Return cached data if still valid
  if (weatherCache && Date.now() - weatherCache.timestamp < CACHE_DURATION) {
    return weatherCache.data;
  }

  try {
    // Singapore coordinates
    const latitude = 1.3521;
    const longitude = 103.8198;
    
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m,surface_pressure&timezone=Asia%2FSingapore&forecast_days=1`
    );

    if (!response.ok) {
      throw new Error(`Weather API request failed with status ${response.status}`);
    }

    const data: OpenMeteoResponse = await response.json();
    const current = data.current;
    
    const isDay = current.is_day === 1;
    const { condition, icon, description } = mapWeatherCondition(current.weather_code, isDay);
    
    const result: WeatherData = {
      temperature: Math.round(current.temperature_2m),
      condition,
      description,
      humidity: current.relative_humidity_2m,
      windSpeed: Math.round(current.wind_speed_10m * 3.6), // Convert m/s to km/h
      icon,
      location: 'Singapore, SG',
      feelsLike: Math.round(current.apparent_temperature),
      pressure: Math.round(current.surface_pressure),
      isDay,
      timestamp: Date.now()
    };

    // Update cache
    weatherCache = {
      data: result,
      timestamp: Date.now()
    };

    return result;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    
    // Return cached data even if it's stale when there's an error
    if (weatherCache) {
      console.warn('Using cached weather data due to error');
      return weatherCache.data;
    }
    
    // Fallback to mock data if no cache is available
    return getMockWeatherData();
  }
};

// Mock weather data for Singapore (realistic values)
const getMockWeatherData = (): WeatherData => {
  // Use current hour to determine weather pattern for consistency within the hour
  const currentHour = new Date().getHours();
  const isDay = currentHour >= 6 && currentHour < 18;
  const dayPattern = Math.floor(currentHour / 6); // Changes every 6 hours
  
  const mockConditions = [
    { 
      condition: 'rain', 
      icon: isDay ? '🌧️' : '🌧️', 
      description: 'Light Rain', 
      temp: 26, 
      humidity: 85, 
      wind: 12,
      pressure: 1010
    },
    { 
      condition: 'clouds', 
      icon: isDay ? '⛅' : '☁️', 
      description: 'Partly Cloudy', 
      temp: 29, 
      humidity: 75, 
      wind: 8,
      pressure: 1012
    },
    { 
      condition: 'clear', 
      icon: isDay ? '☀️' : '🌙', 
      description: 'Clear', 
      temp: 32, 
      humidity: 70, 
      wind: 6,
      pressure: 1011
    },
    { 
      condition: 'thunderstorm', 
      icon: '⛈️', 
      description: 'Thunderstorm', 
      temp: 25, 
      humidity: 90, 
      wind: 15,
      pressure: 1008
    }
  ];
  
  const selectedCondition = mockConditions[dayPattern % mockConditions.length];
  
  return {
    temperature: selectedCondition.temp,
    condition: selectedCondition.condition,
    description: selectedCondition.description,
    humidity: selectedCondition.humidity,
    windSpeed: selectedCondition.wind,
    icon: selectedCondition.icon,
    location: 'Singapore, SG',
    feelsLike: selectedCondition.temp + (Math.random() > 0.5 ? -1 : 1) * Math.floor(Math.random() * 2),
    pressure: selectedCondition.pressure,
    isDay,
    timestamp: Date.now()
  };
};
