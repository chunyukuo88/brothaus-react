import React, { useEffect, useState } from 'react';
import urls from '../../urls';
import { EnglishWeatherDisplay } from './EnglishWeatherDisplay';

export default function WeatherDisplay (props) {
  const [ degreesKelvin, setDegreesKelvin] = useState(270);
  const [ humidity, setHumidity ] = useState(50);

  const display = (props.isFahrenheit)
    ? getEnglishDisplay(getDegreesFahrenheit(degreesKelvin), humidity)
    : getDisplayCelsius(getDegreesCelsius(degreesKelvin), humidity);

  const getWeatherFromApi = async () => {
    const result = await fetch(urls.openWeatherUrl).then(res => res.json());
    setDegreesKelvin(result.main.temp);
    setHumidity(result.main.humidity);
  }

  useEffect(() => {
    getWeatherFromApi();
  },[]);

  return <>{display}</>;
}

const getDegreesFahrenheit = degreesKelvin => (9/5) * (degreesKelvin - 273) + 32;
const getEnglishDisplay = (temp, humidity) => {
  const props = {temp, humidity}
  return <EnglishWeatherDisplay {...props}/>
}

const getDegreesCelsius = degreesKelvin => (degreesKelvin - 273.15);
const getDisplayCelsius = (temp, humidity) => {
  const tempColor = temp > 2 ? '#4c9900' : 'blue';
  return <div><span style={{color: `${tempColor}`}}>{Math.round(temp)}°C</span> and {humidity}% humidity <br/> here in Westerville</div>
}

