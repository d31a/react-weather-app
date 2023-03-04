# Readme
## Weather app

View in action: https://react-weather-app-d31a.vercel.app

This is a simple React application that uses an API to show the user's local weather. The app is composed of two files, `App.js` and `Weather.js`, and a CSS file `styles.css`.

## How it works
The `App.js` file contains the main component of the application. The component initializes the `lat`, `long`, and `data` state variables using the `useState` hook. The `useEffect` hook is used to call the OpenWeatherMap API to get the weather data of the user's location based on the latitude and longitude.

The App also refreshes every minute to make sure that the weather is constantly updated: 

 ```
// refresh API call
  const intervalId = setInterval(() => {
    fetchData();
  }, 60000); // refresh every 60 seconds

  return () => clearInterval(intervalId);
}, [lat, long]); console.log("API Refreshed!");
```


The `Weather.js` component receives the `weatherData` prop from the `App.js` component and displays the weather data using an icon, temperature, location, and weather description.

A ternery `if / else` statement determines what color the degrees will display depending on the temperature: 

  ```
const tempColour = temp < 4 ? "low" : temp < 15 ? "mid" : temp > 30 ? "hot" : temp > 20 ? "warm" : "temp";
```

This is then outputted to the body element to change the color of the background based on the temperature using JSX expressions: 

 ``document.body.className = `${weather} ${tempColour}`;``
 

## How to use it
Clone the repository to your local machine.
- Run npm install to install the required dependencies.
- Create an account on the OpenWeatherMap API website, and generate an API key.
- Create a .env file in the root directory, and add the following lines:

```
REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
REACT_APP_API_KEY = <YOUR API KEY>
REACT_APP_ICON_URL = 'https://openweathermap.org/img/w'
```

- Start the app by running npm start in the terminal.
- Allow the app to access your location when prompted.
- The app will display the weather information of your location.

---

### Important note on the `.env` 

Make sure the `.env` file is is your `root` project folder `/weather-api` or it will not work.

## Credits

With thanks to FreeCodeCamp for their instructions on how to import an API into React.

https://www.freecodecamp.org/news/learn-react-by-building-a-weather-app/
