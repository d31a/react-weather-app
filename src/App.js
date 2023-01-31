
// App uses an API to pull users location to show their local weather
import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/Weather';
export default function App() {
  // creating state for holding the state of the lat / long 
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  // fetch call to get the data from the API.
  // process.env.REACT_APP_API_URL gets API address
  // process.env.REACT_APP_API_KEY gets API Key from the .env file
  // Why ? This keeps the key secure !

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) { // pulls current position
        setLat(position.coords.latitude); // setting the lat into the state
        setLong(position.coords.longitude); // setting the long into the state
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json()) // parsing the results to json
      .then(result => { // compiles this in the result
        setData(result) // sets this into the Data state
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])
  

  // mandatory check to make sure in case of undefined data, an empty div is returned -- due to async
  // async shows the return statement prior to the data being pulled from the API 
    return (
      <div className="App">
        {(typeof data.main != 'undefined') ? (
          // Weather props being passed to main App.js
          <Weather weatherData={data}/>
        ): (
          <div></div>
        )}
        
      </div>
  );
}

