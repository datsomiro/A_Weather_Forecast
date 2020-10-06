import React from "react";
import ReactDOM from "react-dom";
import WeeklyForecast from "./weeklyForecast/weeklyForecast.jsx";
import "./style.scss";
import "./index.html";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Weekly Weather Forecast</h1>
          <WeeklyForecast/>
      </div>
    );
  }
};

const appElm = document.querySelector("#app");
ReactDOM.render(<App />, appElm);
