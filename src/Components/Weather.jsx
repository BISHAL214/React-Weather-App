import React from 'react'
import moment from 'moment'
import './Weather.css'

export default function Weather({ weatherData }) {
    return (
        <div className='container'>

            <div className='timeCountry'>
                <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
                <h1>Country: {weatherData?.sys?.country}</h1>
            </div>

            <div className='headerContainer'>

                <div className='latlon'>
                    <p>Latitude: {weatherData?.coord?.lat}</p>
                    <p>Longitude: {weatherData?.coord?.lon}</p>
                </div>

                <div className='temp'>

                    <h1 className='header'>{weatherData?.name}</h1>
                    <p>{Math.round(weatherData?.main?.temp)} °C</p>
                    <p>{weatherData?.weather && weatherData?.weather[0]?.main}</p>
                    <h2>Feels Like</h2>
                    <p>{weatherData?.main?.feels_like} °C</p>



                </div>

            </div>

            <div className='maxmin'>
                <p>max temperature: {weatherData?.main?.temp_max} °C</p>
                <p>min temperature: {weatherData?.main?.temp_min} °C</p>
            </div>

            <div className='extra'>

                <div className='humpre'>
                    <p>humidity: {weatherData?.main?.humidity}</p>
                    <p>pressure: {weatherData?.main?.pressure}</p>
                </div>

                <div className='wind'>
                    <h4>Wind</h4>
                    <div className='windDetails'>
                        <p>Angle: {weatherData?.wind?.deg}°</p>
                        <p>Speed: {weatherData?.wind?.speed} </p>
                    </div>
                </div>

                <div className='sun'>
                    <p>sunrise: {new Date(weatherData?.sys?.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                    <p>sunset: {new Date(weatherData?.sys?.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                </div>

            </div>

        </div>
    )
}

