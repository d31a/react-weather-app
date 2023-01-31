import React from 'react';
import '../App.css'
import './styles.css'
import moment from 'moment'; // package imports the date 
import icons from 'open-weather-icons'
// pulls all the info from the API, presents into a card 

//    <p className="date"> {moment().format('LL')}</p> pulls date


    const CardExampleCard = ({weatherData}) => {
      // to add an icon 
      
      const iconcode = weatherData.weather[0].icon; 
      const iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@4x.png";

      return (
        <div>
          <div className="card">
              <div className="header"> {weatherData.name}
              </div>
                <div className="content">
                <img id="wicon" src={iconurl} alt="" />
                <p id="temp">{weatherData.main.temp}&deg;c</p>   
                <p id="current">Currently {weatherData.weather[0].main} outside</>
              </div>
          </div>
        </div>
        )
      };
      
      export default CardExampleCard