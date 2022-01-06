import React from "react";

export default function WeatherTemperature(props) {
  return (
    <span className="WeatherTermperature">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit">°C </span>
    </span>
  );
}
