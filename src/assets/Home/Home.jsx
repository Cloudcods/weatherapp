import React, { useState } from 'react'
import './Home.css'


const Home = () => {

  const api = {
    apiKey: "c4ad2544dd6d50f651a9df4f91fc9392",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const [ search, setSearch ] = useState("")
  const [ weather, setWeather ] = useState({})
  const [ temperature, setTemperature ] = useState("")
  const [ kelvin, setKelvin ] = useState("")
  const [condition, setCondition]=useState("")
  const[longitude,setLongitude]=useState("")
  const[latitude,setLatitude]=useState("")

 const getLocation = async () => {
       const response = await fetch(`${api.base}weather?q=${search}&appid=${api.apiKey}`)
       const data = await response.json()
       console.log(data)
       setWeather(data)
       const kelvin =data.main.temp
       const celcius= kelvin -273.15
       const longitude=data.coord.lat
       const latitude=data.coord.lon

       let temp = parseFloat(celcius.toFixed(2))


       setTemperature(temp)
       setKelvin(kelvin)
       setCondition(data.weather[0].description)
       setLongitude(longitude)
       setLatitude(latitude)
  }


  return (
    <>
      <div className="wrapper">
      <div className="search-container">
    <input type="search" placeholder="Enter city name.." onChange= { (e) => setSearch(e.target.value)} />
    <button onClick={getLocation}>Search</button>
  </div>
        <p>{weather.name}</p>
        <p>{temperature}</p>
        <p>{kelvin}</p>
        <p>{condition}</p>
        <p>{longitude}</p>
        <p>{latitude}</p>
      </div>
    </>
  )
}

export default Home