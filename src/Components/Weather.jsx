import React from 'react'
import moment from 'moment'
import './Weather.css'
import { motion } from 'framer-motion'

export default function Weather({ weatherData }) {


    return (

        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
        className='container'>

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

                            <p id='size'>{weatherData?.main?.temp_max}°C</p>
                            <h5>Maximum Temperature</h5>

                        </div>
                    </div>

                    <div className="min">
                        <div className='minimum'>

                            <p id='size'>{weatherData?.main?.temp_min}°C</p>
                            <h5>Minimum Temperature</h5>

                        </div>
                    </div>

                </div>

                <div className='humpre'>

                    <div className='hum'>
                        <img src="./humidity.svg" alt='humidity' id='humicon' />
                        <div className='humidity'>
                            <p id='size1'> {weatherData?.main?.humidity}%</p>
                            <h5>Humidity</h5>
                        </div>

                    </div>

                    <div className='pre'>
                        <img src="./pressure.png" alt="pressure" id='presicon' />
                        <div className='pressure'>

                            <p id='size1'>{weatherData?.main?.pressure}</p>

                            <h5>Pressure</h5>

                        </div>

                    </div>

                </div>


                <div className='windDetails'>

                    <div className='direction'>
                        <img src="./wind-direction.png" alt="wind-direction" id='direicon' />
                        <div className='winddire'>

                            <p id='size1'>{weatherData?.wind?.deg}°</p>
                            <h5>Angle</h5>

                        </div>

                    </div>

                    <div className='speed'>
                        <img src="./wind-speed.png" alt="wind-direction" id='speedicon' />
                        <div className='windspeed'>
                            <p id='size1'>{weatherData?.wind?.speed}km/h </p>
                            <h5>Speed</h5>

                        </div>

                    </div>

                </div>

            </div>

        </motion.div>



    )
}

