import React from "react";
import DayForecast from ".././dayForecast/dayForecast.jsx";
import './style.scss';



export default class WeeklyForecast extends React.Component {
    render() {
        return (
            <div className="week-forecast">
                <DayForecast />
                <DayForecast />
                <DayForecast />
                <DayForecast />
                <DayForecast />
                <DayForecast />
                <DayForecast />
                <DayForecast />
            </div>

          );
        }
}

    
