import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weather, setWeather] = useState({
        cityName: "Mumbai",
        description: "overcast clouds",
        feelsLike: 38.49,
        humidity: 64,
        temp: 32.06,
        tempMax: 32.06,
        tempMin: 32.06,
    });

    const updateInfo = (result) => {
        setWeather(result);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App by <span style={{ color: "purple" }}>Akash</span></h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weather} />
        </div>
    );
}
