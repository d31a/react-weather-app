import React from 'react';
import '../App.css'
import './styles.css'
//import moment from 'moment'; // package imports the date 
//    <p className="date"> {moment().format('LL')}</p> pulls date

// pulls all the info from the API, present into a card 
    const CardExampleCard = ({weatherData}) => {
      // to add an icon 
      const iconcode = weatherData.weather[0].icon; 
      const iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@4x.png";
      // rounds value of temp to nearest int 
      const temp = Math.round(weatherData.main.temp);
      // testing for different colors according to weather temp 
      const tempColour = temp < 4 ? "low" : temp < 15 ? "mid" : temp > 30 ? "hot" : temp > 20 ? "warm" : "temp";
    
      /* add refresh button 
      const refresh = () => {
        window.location.reload();
      } */

      return (
        <div>
          <div className="card">
              <div className="header"> 
              {weatherData.name} <span id="country">{weatherData.sys.country}</span>
              </div>
                <div className="content">
                <img id="wicon" src={iconurl} alt="" />
                  <p className={tempColour}>{temp}&deg;c</p> 
                <p id="current">Currently {weatherData.weather[0].main} outside</p>
              </div>
          </div>
        </div>
        )
      };
      
      export default CardExampleCard