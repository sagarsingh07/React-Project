import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  let getWheatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let resJSON = await response.json();
      console.log(resJSON);

      let result = {
        city: resJSON.name,
        temp: resJSON.main.temp,
        tempMin: resJSON.main.temp_min,
        tempMax: resJSON.main.temp_max,
        humidity: resJSON.main.humidity,
        feelsLike: resJSON.main.feels_like,
        weather: resJSON.weather[0].description,
      };

      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSumbit = async (event) => {
    try {
      event.preventDefault();
      setCity("");
      let newInfo = await getWheatherInfo();

      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSumbit}>
        <TextField
          id="city"
          label="Location"
          variant="standard"
          required
          value={city}
          onChange={handleChange}
        />
        <br /> <br />
        <Button variant="contained" type="submit">
          Display
        </Button>

        {error && <p style={{color : "red"}}>No such place exists !</p>}
      </form>
    </div>
  );
}
