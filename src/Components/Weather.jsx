import React from 'react'
import moment from 'moment'
import './Weather.css'

export default function Weather({ weatherData }) {
    return (
        <div className='container'>

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
                        <h5>Max Temp.</h5>

                    </div>
                </div>

                <div className="min">
                    <div className='minimum'>

                        <p>{weatherData?.main?.temp_min}°C</p>
                        <h5>Min Temp.</h5>

                    </div>
                </div>

            </div>

                <div className='humpre'>

                    <div className='hum'>

                        <div className='humidity'>

                        <img src="./humidity.svg" alt='humidity' id='humicon' />
                            <p> {weatherData?.main?.humidity}%</p>
                            <h5>Humidity</h5>
                        </div>

                    </div>

                    <div className='pre'>

                        <div className='pressure'>

                        <img src="./pressure.png" alt="pressure" id='presicon' />
                            <p id='pre'>{weatherData?.main?.pressure}</p>

                            <h5>Pressure</h5>

                        </div>

                    </div>

                </div>

                <div className='wind'>

                    <div className='windDetails'>

                        <div className='direction'>

                            <div className='winddire'>
                                
                                <img src="./wind-direction.png" alt="wind-direction" id='direicon' />
                                <p>{weatherData?.wind?.deg}°</p>
                                <h5>Direction</h5>

                            </div>

                        </div>

                        <div className='speed'>

                            <div className='windspeed'>

                                <img src="./wind-speed.png" alt="wind-direction" id='speedicon' />
                                <p>{weatherData?.wind?.speed}km/h </p>
                                <h5>Speed</h5>

                            </div>

                        </div>

                    </div>

                </div>
        </div>
    )
}

