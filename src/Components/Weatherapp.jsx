import React, { useEffect, useState } from 'react'

import search_icon from "../assets/search.png"
import cloud_icon from "../assets/cloud.png" 
import humidity_icon from "../assets/humidity.png"
import wind_icon from "../assets/wind.png"
import { FaSearch } from "react-icons/fa";

import styled from 'styled-components'


const Weatherapp = () => {
const [search,setSearch]=useState("");
const [temp,setTemp] = useState("")
const [city,setCity]=useState("");
const [humidity,setHumidity]=useState("")
const [windspeed,setWindspeed]=useState("");
const[icon,setIcon]=useState("")

const searchValue = search
const handleInput=(event)=>{
  setSearch(event.target.value)
  // console.log(searchValue);
}


const handleSearch=async()=>{
  console.log(`Searched value is ${searchValue}`)


  if (searchValue==="") {
    return 0 ;
  }
  let apikey=""
let url=`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${searchValue}`
let response = await fetch(url);
let data  = await response.json()
// console.log(data)
setTemp(data.current.temp_c);
setCity(data.location.name);
setHumidity(data.current.humidity);
setWindspeed(data.current.wind_kph)


}

useEffect(()=>{
  handleSearch();

}
   
  ,[])
  // useEffect(() => {

    
  //   console.log(`place is ${city} temp is ${temp} humidity is ${humidity} and windspeed is ${windspeed} icon is ${icon}`);
  // }, [city, temp, humidity, windspeed,icon]);
  



  return (
    <Container className="container">
      <Topbar className="topbar">
        <input type="text" placeholder='SEARCH ' onChange={handleInput}/>
        <div className="searchicon">
        <FaSearch onClick={handleSearch}  size={40} />

        </div>

      </Topbar>

      <Weatherimage className="weatherimage">
        <img src={cloud_icon} alt="" />

      </Weatherimage>
      <Weatherdetails>
      <p className="temperature">{temp}°C</p>
      <p className="weatherloc">{city}</p>
      </Weatherdetails>
      
      <Otherdetails className="otherdetails">
        <div className="humidity">
          <div className="himg">
          <img src={humidity_icon} alt="" />
          </div>
          <div className="hdet">
          <p><span>{humidity}%</span></p>
          <p className='values'>Humidity</p>

          </div>
          


        </div>
        <div className="windspeed">
          <div className="wimg">
          <img src={wind_icon} alt="" />
          </div>
          <div className="wdetails">
          <p><span>{windspeed} Km/h</span></p>
          <p className='values'>WIND SPEED</p>
          </div>
        </div>
      </Otherdetails>





    </Container>

  )
}

export default Weatherapp

const Container = styled.div`

height: 829px;
width: 607px;
margin: auto;
margin-top: 75px;
border-radius: 40px;
background-color: #8BC6EC;
background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
;
`
const Topbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  padding-top: 60px;

input{
  width: 362px;
  height: 78px;
  border: none;
  outline: none;
  border-radius: 40px;
  padding-left: 40px;
  font-size: 20px;
  font-weight: 400px;
}

.searchicon{
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  background: white;
  border-radius:20px ;
  cursor: pointer;
}
`

const Weatherimage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;


`

const Weatherdetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

.temperature{
  display: flex;
  justify-content: center;
  font-size: 120px;
  margin-top: 0;
  margin-bottom: 0;
  color: white;

}
.weatherloc{
  display: flex;
  justify-content: center;
  color: white;
  font-size: 60px;
  font-weight: 400px;
  margin-top: 0px;
}


`

const Otherdetails = styled.div`
  display: flex;
  justify-content: center;
  gap: 200px;
  color: white;
  font-weight: 400;

.humidity{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.windspeed{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
span{
  font-size: 34px;
  font-weight: 400;
  
  margin-block-start: 0px;
  margin-block-end: 0px;
}
.values{
  font-weight: 400;
  font-size: 20px;
  margin-top: 2px;
}
.img{
  display: flex;
  justify-content: center;
  align-items: center;
}

`
