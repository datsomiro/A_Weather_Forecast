import React from "react";
import './style.scss';


export default class DayForecast extends React.Component {
    render() {
        return (
            <div className="week-forecast">
                <div className="day-forecast">
                    <div className="day-forecast__header">{this.props.day}</div>
                    <div className="day-forecast__body">
                        <div className={`day-forecast__image weather-${this.props.weather}`}></div>
                        <div className="day-forecast__temps">
                            <span className="temp-day">18°</span>
                            <span className="temp-night">11°</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
