'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from "@/contexts/ThemeContext";
import { fetchWeatherData, WeatherData } from "@/lib/weather";
import { motion } from 'framer-motion';

interface WeatherLocationSectionProps {
  className?: string;
  location?: string;
}

const weatherConditions = {
  clear: {
    bg: 'from-blue-400 to-blue-600',
    icon: '☀️',
    bgAnimation: 'animate-pulse-slow',
  },
  clouds: {
    bg: 'from-gray-400 to-gray-600',
    icon: '☁️',
    bgAnimation: 'animate-clouds',
  },
  rain: {
    bg: 'from-blue-600 to-blue-800',
    icon: '🌧️',
    bgAnimation: 'animate-rain',
  },
  snow: {
    bg: 'from-blue-100 to-blue-300',
    icon: '❄️',
    bgAnimation: 'animate-snow',
  },
  thunderstorm: {
    bg: 'from-purple-700 to-blue-900',
    icon: '⛈️',
    bgAnimation: 'animate-thunder',
  },
  default: {
    bg: 'from-gray-500 to-gray-700',
    icon: '🌤️',
    bgAnimation: '',
  },
} as const;

type WeatherCondition = keyof typeof weatherConditions;

const getWeatherAnimation = (condition: string, isDark: boolean) => {
  // Common animation variants
  const fadeInOut = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: [0, 0.8, 0],
      transition: { 
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'reverse' as const
      }
    }
  };

  switch (condition) {
    case 'rain':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 40 }).map((_, i) => {
            const left = Math.random() * 100;
            const delay = Math.random() * 2;
            const duration = 0.8 + Math.random() * 0.5;
            const length = 15 + Math.random() * 15;
            const opacity = 0.3 + Math.random() * 0.4;
            
            return (
              <motion.div
                key={i}
                className={`absolute ${isDark ? 'bg-blue-300' : 'bg-blue-600'}`}
                style={{
                  left: `${left}%`,
                  top: `-20px`,
                  width: '1px',
                  height: `${length}px`,
                  opacity: 0,
                }}
                animate={{
                  y: '100vh',
                  opacity: [0, opacity, 0],
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: delay,
                }}
              />
            );
          })}
        </div>
      );

    case 'thunderstorm':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Rain */}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={`rain-${i}`}
              className={`absolute ${isDark ? 'bg-blue-400' : 'bg-blue-700'}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: '-20px',
                width: '1.5px',
                height: '20px',
              }}
              animate={{
                y: '100vh',
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 0.4 + Math.random() * 0.3,
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 2,
              }}
            />
          ))}
          
          {/* Lightning */}
          <motion.div
            className="absolute inset-0 opacity-0"
            style={{
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 5 + Math.random() * 10,
              ease: 'easeInOut',
            }}
          />
        </div>
      );

    case 'clouds':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => {
            const size = 80 + Math.random() * 120;
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const duration = 40 + Math.random() * 40;
            const delay = Math.random() * 20;
            const opacity = isDark ? 0.15 : 0.25;
            
            return (
              <motion.div
                key={i}
                className={`absolute rounded-full ${isDark ? 'bg-gray-300' : 'bg-gray-500'}`}
                style={{
                  width: `${size}px`,
                  height: `${size * 0.4}px`,
                  left: `${left}%`,
                  top: `${top}%`,
                  opacity: 0,
                }}
                animate={{
                  x: [0, 20, 0],
                  opacity: [0, opacity, 0],
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: delay,
                }}
              />
            );
          })}
        </div>
      );

    case 'snow':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 40 }).map((_, i) => {
            const left = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = 8 + Math.random() * 15;
            const size = 6 + Math.random() * 8;
            const opacity = 0.7 + Math.random() * 0.3;
            
            return (
              <motion.div
                key={i}
                className={`text-2xl ${isDark ? 'text-white' : 'text-blue-100'}`}
                style={{
                  position: 'absolute',
                  left: `${left}%`,
                  top: '-30px',
                  opacity: 0,
                }}
                animate={{
                  y: '100vh',
                  x: [`${left}%`, `${left + (Math.random() * 60 - 30)}%`],
                  rotate: 360,
                  opacity: [0, opacity, 0],
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: delay,
                }}
              >
                ❄
              </motion.div>
            );
          })}
        </div>
      );

    case 'clear':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Sun rays */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={`ray-${i}`}
              className={`absolute ${isDark ? 'bg-yellow-300' : 'bg-yellow-500'}`}
              style={{
                height: '1px',
                width: '0px',
                left: '50%',
                top: '50%',
                transformOrigin: 'left center',
                opacity: 0.3,
              }}
              animate={{
                width: ['0px', '40px', '0px'],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 2,
                delay: i * 0.5,
                ease: 'easeInOut',
              }}
            />
          ))}
          
          {/* Twinkling stars at night */}
          {!isDark && Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute bg-white rounded-full"
              style={{
                width: '1px',
                height: '1px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: '0 0 3px 1px white',
                opacity: 0,
              }}
              variants={fadeInOut}
              initial="hidden"
              animate="visible"
              transition={{
                delay: Math.random() * 5,
                duration: 1 + Math.random() * 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </div>
      );

    default:
      return null;
  }
};

const WeatherLocationSection: React.FC<WeatherLocationSectionProps> = ({ 
  className = "",
  location = "Singapore"
}) => {
  const { isDarkMode } = useTheme();
  const [weather, setWeather] = useState<Awaited<ReturnType<typeof fetchWeatherData>> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadWeather = async () => {
      try {
        setIsLoading(true);
        const data = await fetchWeatherData();
        setWeather(data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch weather:', err);
        setError('Failed to load weather data');
      } finally {
        setIsLoading(false);
      }
    };

    loadWeather();
    // Refresh weather data every 10 minutes
    const interval = setInterval(loadWeather, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const getWeatherCondition = (): WeatherCondition => {
    if (!weather) return 'default';
    return (weather.condition as WeatherCondition) || 'default';
  };

  const condition = getWeatherCondition();
  const weatherStyle = weatherConditions[condition] || weatherConditions.default;
  const isDay = weather?.isDay ?? true; // Default to day if not available

  if (isLoading) {
    return (
      <div className={`col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-3 row-start-3 border rounded-[12px] lg:rounded-[16px] xl:rounded-[20px] 2xl:rounded-[28px] p-2 sm:p-3 lg:p-4 xl:p-5 2xl:p-8 flex flex-col justify-center items-center text-center min-h-0 transition-colors duration-300 ${isDarkMode ? 'bg-[#1a1a1a] border-[#2a2a2a]' : 'bg-white border-[#E5E5E7]'} ${className}`}>
        <div className="animate-pulse text-4xl">🌤️</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-3 row-start-3 border rounded-[12px] lg:rounded-[16px] xl:rounded-[20px] 2xl:rounded-[28px] p-2 sm:p-3 lg:p-4 xl:p-5 2xl:p-8 flex flex-col justify-center items-center text-center min-h-0 transition-colors duration-300 ${isDarkMode ? 'bg-[#1a1a1a] border-[#2a2a2a]' : 'bg-white border-[#E5E5E7]'} ${className}`}>
        <p className={`nothing-mono text-[8px] ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>
          Weather unavailable
        </p>
      </div>
    );
  }

  return (
    <div className={`col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-3 row-start-3 border rounded-[12px] lg:rounded-[16px] xl:rounded-[20px] 2xl:rounded-[28px] p-2 sm:p-3 lg:p-4 xl:p-5 2xl:p-8 flex flex-col justify-center items-center text-center min-h-0 transition-colors duration-300 relative overflow-hidden ${isDarkMode || !isDay ? 'bg-[#1a1a1a] border-[#2a2a2a]' : 'bg-white border-[#E5E5E7]'} ${className}`}>
      
      {/* Animated weather background */}
      {weather && getWeatherAnimation(weather.condition, isDarkMode || !isDay)}
      
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        {/* Weather icon and temperature */}
        <div className="flex items-center justify-center mb-1 lg:mb-2">
          <span className="text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] mr-1">
            {weather?.icon}
          </span>
          <span className={`nothing-mono text-[12px] sm:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] font-medium ${isDarkMode || !isDay ? 'text-[#ffffff]' : 'text-[#1D1D1F]'}`}>
            {weather?.temperature}°C
          </span>
        </div>

        {/* Weather description */}
        <p className={`nothing-mono text-[8px] sm:text-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] mb-1 ${isDarkMode || !isDay ? 'text-[#cccccc]' : 'text-[#424245]'}`}>
          {weather?.description}
        </p>

        {/* Location */}
        <p className={`nothing-mono text-[9px] sm:text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[16px] font-medium mb-1 ${isDarkMode || !isDay ? 'text-[#ffffff]' : 'text-[#1D1D1F]'}`}>
          📍 {location}
        </p>

        {/* Additional weather info */}
        <div className="flex items-center justify-center space-x-2 text-[6px] sm:text-[7px] lg:text-[8px] xl:text-[9px] 2xl:text-[11px]">
          <span className={`nothing-mono ${isDarkMode || !isDay ? 'text-[#999999]' : 'text-[#6E6E73]'}`}>
            💧 {weather?.humidity}%
          </span>
          <span className={`nothing-mono ${isDarkMode || !isDay ? 'text-[#999999]' : 'text-[#6E6E73]'}`}>
            💨 {weather?.windSpeed}km/h
          </span>
          <span className={`nothing-mono ${isDarkMode || !isDay ? 'text-[#999999]' : 'text-[#6E6E73]'}`}>
            {isDay ? '☀️ Day' : '🌙 Night'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherLocationSection;
