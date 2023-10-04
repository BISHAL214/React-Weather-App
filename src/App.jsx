import React, { useState } from 'react'
import config from './conf/config'
import Weather from './Components/Weather'
import './Components/Weather.css'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import weatherBackground from './Components/Background'

function App() {

  const [bg1, setBg1] = useState()
  const [bg2, setBg2] = useState()
  const [bg3, setBg3] = useState()
  const [bg4, setBg4] = useState()

    const backgroundVideoClouds = <video src="./Clouds.mp4" autoPlay muted loop></video>
    const backgroundVideoRain = <video src="./Rain.mp4" autoPlay muted loop></video>
    const backgroundVideoHaze = <video src="./Haze.mp4" autoPlay muted loop></video>
    const backgroundVideoSnow = <video src="./Snow.mp4" autoPlay muted loop></video>


  const [data, setData] = useState([])

  const [city, setCity] = useState('')

  const searchBtn = document.getElementById('search')

  const fetchData = async (evt) => {

    if (evt.key === "Enter" || evt.value === searchBtn) {
      await fetch(`${config.weatherApiUrl}${city}&appid=${config.weatherApiKey}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          setCity('')
          setBg1(backgroundVideoClouds)
          setBg2(backgroundVideoRain)
          setBg3(backgroundVideoHaze)
          setBg4(backgroundVideoSnow)
          toastifySuccess()
          console.log(result)
        })
    }
  }

  const toastifySuccess = () => {
    toast("Oops! Invalid City", {
      position: 'top-right',
      autoClose: 5000,
      closeOnClick: true,
      draggable: false,
    });
  }




  return (

    <>

      <div className='App'>


      <div className='bg1'>

      {data?.weather && data?.weather[0]?.main === "Clouds" ? 
                document.body.style.background = bg1
                : null}
      {data?.weather && data?.weather[0]?.main === "Rain" ? 
                document.body.style.background = bg2
                : null}
      {data?.weather && data?.weather[0]?.main === "Haze" ? 
                document.body.style.background = bg3
                : null}
      {data?.weather && data?.weather[0]?.main === "Snow" ? 
                document.body.style.background = bg4
                : null}
                
      </div>
      
        <div className="area">
          <input type="text" id='input' placeholder="Enter City Name" className='bg-transparent' spellCheck="false" onChange={e => setCity(e.target.value)} value={city} onKeyDown={fetchData} />
        </div>

        {data.name ? <Weather weatherData={data} background={bg1} /> : < ToastContainer theme='dark'/>}
      </div>
    </>

  )
}

export default App
