import React from 'react'
import DailyForecast from '../Daily-Forecast/DailyForecast'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

const DailyForeCast = (props) => {
    const navigate = useNavigate()
  return (
    <div className=' flex flex-col justify-center h-screen items-center bg-white'>
      coming soon....
      <Button onClick={() => navigate("/")}>Go To Home</Button>
    </div>
  )
}

export default DailyForeCast
