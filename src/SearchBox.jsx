import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    const getWeather = async () => {
        try {
            const response = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            );
            const jsonResponse = await response.json();

            if (jsonResponse.cod !== 200) {
                throw new Error(jsonResponse.message);
            }

            return {
                cityName: jsonResponse.name,
                feelsLike: jsonResponse.main.feels_like,
                humidity: jsonResponse.main.humidity,
                temp: jsonResponse.main.temp,
                tempMax: jsonResponse.main.temp_max,
                tempMin: jsonResponse.main.temp_min,
                description: jsonResponse.weather[0].description,
            };
        } catch (err) {
            throw err;
        }
    };

    const handleInputChange = (event) => {
        setCity(event.target.value);
        setError(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const newResult = await getWeather();
            updateInfo(newResult);
            setCity("");
            setError(false);
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div>
            <h4>Search Box</h4>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleInputChange}
                />
                {error && <p style={{ color: "red" }}>No such place exists!</p>}
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    );
}
