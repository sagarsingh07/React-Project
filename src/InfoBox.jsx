import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import "./InfoBox.css";

export default function InfoBox({ info }) {
  let COLD_URL =
    "https://images.unsplash.com/photo-1496340077100-9573d8b77463?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGR8ZW58MHx8MHx8fDA%3D";
  let HOT_URL =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  let RAIN_URL =
    "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8=";

  return (
    <div className="InfoBox">
      <h2>Weather Info :</h2>

      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 25
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <b>{info.city}</b>
              {
              info.humidity > 80
                ? <ThunderstormIcon/>
                : info.temp > 25
                ? <WbSunnyIcon/>
                : <AcUnitIcon/>
            }
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature : {info.temp}&deg;C</p>
              <p>
                <b>
                  <i>Feels Liks : {info.feelsLike}&deg;C</i>
                </b>
              </p>
              <p>Humidity : {info.humidity}</p>
              <p>Minimum Temperature : {info.tempMin}&deg;C</p>
              <p>Maximum Temperature : {info.tempMax}&deg;C</p>
              <p>Weather seems to be of <i><b>{info.weather}</b></i> and feels like {info.feelsLike}&deg;C.</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
