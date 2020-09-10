import React, { Component } from "react";

export class EnglishWeatherDisplay extends Component {
  degreesFahrenheit = this.props.temp;
  humidity = this.props.humidity;
  render() {
    return(
      <div>
        <span>{Math.round(this.degreesFahrenheit)}°F </span>
        and {this.humidity}% humidity <br/> here in Westerville.
      </div>
    );
  }
}

export class ChineseWeatherDisplay extends Component {
  degreesCelsius = this.props.temp;
  humidity = this.props.humidity;
  render() {
    return(
      <div>
        這裏有<span>{Math.round(this.degreesCelsius)}°C</span>，濕度為{this.humidity}%。
      </div>
    );
  }
}

export class RussianWeatherDisplay extends Component {
  degreesCelsius = this.props.temp;
  humidity = this.props.humidity;
  render() {
    return(
      <div>
        Здесь <span>{Math.round(this.degreesCelsius)}°C </span>и влажность {this.humidity}%.
      </div>
    );
  }
}
