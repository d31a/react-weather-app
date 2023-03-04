import React from 'react';
import '../App.css'
import './styles.css'
//import moment from 'moment'; // package imports the date 
//    <p className="date"> {moment().format('LL')}</p> pulls date

// pulls all the info from the API, present into a card 
    const weatherCard = ({weatherData}) => {
      // to add an icon 
      const iconcode = weatherData.weather[0].icon; 
      const iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@4x.png";
      // rounds value of temp to nearest int 
     const temp = Math.round(weatherData.main.temp);

    
      
      /* add refresh button 
      const refresh = () => {
        window.location.reload();
      } */

      return (
        // card
       
        <div>
          <div className="card">
              <div className="header"> 
              <p className="temp">{temp}<sup>c</sup></p> 
              <div className="location">
              <span id="place">{weatherData.name}</span> 
              <span id="country">{weatherData.sys.country}</span>
              </div>
              </div>              
                <div className="content">
                <img id="wicon" src={iconurl} alt="" />
                <p id="current">Currently {weatherData.weather[0].main} outside</p>
              </div>
          </div>
        </div>
     
        )
      };
      
      export default weatherCard