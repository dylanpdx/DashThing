import Weather from "../weather";
import Clock from "./clock";

function ClockWeatherWidget(){
    return (
        <div class="clockweather">
            <Clock />
            <Weather />
        </div>
    )
}

export default ClockWeatherWidget;