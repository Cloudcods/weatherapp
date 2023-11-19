import React, { useState } from 'react'
import './Home.css'


const Home = () => {

  const api = {
    apiKey: "c4ad2544dd6d50f651a9df4f91fc9392",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const [ search, setSearch ] = useState("")
  const [ weather, setWeather ] = useState({})

 const getLocation = async () => {
       const response = await fetch(`${api.base}weather?q=${search}&appid=${api.apiKey}`)
       const data = await response.json()
       console.log(data)
       setWeather(data)
  }


  return (
    <>
      <div className="wrapper">
      <div className="search-container">
    <input type="search" placeholder="Enter city name.." onChange= { (e) => setSearch(e.target.value)} />
    <button onClick={getLocation}>Search</button>
  </div>
        <p>{weather.name}</p>
        <p>{weather.temp}</p>
        <p>condition</p>
        <p>coordinate</p>
      </div>
    </>
  )
}

export default Home