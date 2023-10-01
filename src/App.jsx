import React, { useState } from 'react'
import config from './conf/config'
import Weather from './Components/Weather'
import './Components/Weather.css'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {


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
      
        <div className="area">
          <input type="text" id='input' placeholder="Enter City Name" className='bg-transparent' spellCheck="false" onChange={e => setCity(e.target.value)} value={city} onKeyDown={fetchData} />
        </div>

        {data.name ? <Weather weatherData={data} /> : < ToastContainer theme='dark'/>}
      </div>
    </>

  )
}

export default App
