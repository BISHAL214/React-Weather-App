import React from 'react'
import moment from 'moment'
import './Weather.css'

export default function Weather({ weatherData }) {
    return (
        <div className='container'>

            <div className='appContainer'>

                <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>

                <div className='headerContainer'>

                    <div className='temp'>

                        <p className='temperature'>{Math.round(weatherData?.main?.temp)}°C</p>
                        <h1>{weatherData?.weather && weatherData?.weather[0]?.main}</h1>
                        <p className='header'>{weatherData?.name}</p>
                        <h1>Feels Like</h1>
                        <p>{weatherData?.main?.feels_like}°C</p>



                    </div>

                </div>

                <div className='maxmin'>

                    <div className="max">
                        <div className='maximum'>

                            <p>{weatherData?.main?.temp_max}°C</p>
                            <h5>Maximum Temperature</h5>

                        </div>
                    </div>

                    <div className="min">
                        <div className='minimum'>

                            <p>{weatherData?.main?.temp_min}°C</p>
                            <h5>Minimum Temperature</h5>

                        </div>
                    </div>

                </div>

                <div className='humpre'>

                    <div className='hum'>
                        <img src="./humidity.svg" alt='humidity' id='humicon' />
                        <div className='humidity'>
                            <p> {weatherData?.main?.humidity}%</p>
                            <h5>Humidity</h5>
                        </div>

                    </div>

                    <div className='pre'>
                        <img src="./pressure.png" alt="pressure" id='presicon' />
                        <div className='pressure'>

                            <p id='pre'>{weatherData?.main?.pressure}</p>

                            <h5>Pressure</h5>

                        </div>

                    </div>

                </div>


                <div className='windDetails'>

                    <div className='direction'>
                        <img src="./wind-direction.png" alt="wind-direction" id='direicon' />
                        <div className='winddire'>

                            <p>{weatherData?.wind?.deg}°</p>
                            <h5>Direction</h5>

                        </div>

                    </div>

                    <div className='speed'>
                        <img src="./wind-speed.png" alt="wind-direction" id='speedicon' />
                        <div className='windspeed'>
                            <p>{weatherData?.wind?.speed}km/h </p>
                            <h5>Speed</h5>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

