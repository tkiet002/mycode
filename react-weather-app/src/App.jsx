import { data } from 'autoprefixer';
import axios from 'axios';
import React from 'react';

const App = () =>{ 
  const apiKey = 'ad7fa3579a92f10e082d70c53494839a';
  const apiUrl = ({city}) =>
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=ad7fa3579a92f10e082d70c53494839a`;

  
  const getValue = () =>{
    try {
      let city = "";
      const city_input = document.querySelector(".i-search-location").value;
      city = city_input;
      getWeather({ city });
    } catch (error) {
      alert("Không tồn tại thành phố ")
    }
  }

  const getWeather = async ({city}) =>{
    try {
      const response = await (await fetch(apiUrl({city}))).json();
      console.log(response.weather[0].main)

      document.querySelector(".city").innerHTML = response.name
      document.querySelector(".tempu").innerHTML = response.main.temp + " °C";
      document.querySelector(".humidity").innerHTML = "Độ ẩm: " + response.main.humidity;
      if (response.weather[0].main == 'Clouds') {
        document.querySelector('.weather-img').src = "/images/clouds.png"
      }else if (response.weather[0].main == 'Rain') {
        document.querySelector('.weather-img').src = "/images/rain.png"
      }else if (response.weather[0].main == 'Clear') {
        document.querySelector(".weather-img").src = "/images/clear.png";
      }
      } catch (error) {
        if (error) {
          alert("Doesn't exist" + city)
        }
      }
  }
  
  
  return (
    <div className="card">
      <div className="w-[90%] max-w-[600px] bg-[222] m-auto mt-[100px] bg-slate-500 p-10 rounded-3xl bg-gradient-[137deg] bg-gradient-to-r from-cyan-500 to-cyan-700">
        <div className="search inline-flex m-auto">
          <input
            type="text"
            className="i-search-location p-4 mr-3 rounded-2xl w-[400px]"
            // value={""}
            // onChange={""}
            placeholder='Please enter your city'
          />
          <button
            className="p-4 bg-white rounded-full size-16"
            onClick={getValue}
          >
            <img src="images/search.png" alt="search-icon" />
          </button>
        </div>

        <div className="content  grid  justify-items-center">
          <img className='weather-img'/>
          <p className="text-white text-3xl city"></p>
          <p className="text-white text-2xl tempu"></p>
          <p className="text-white text-2xl humidity">
            
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;