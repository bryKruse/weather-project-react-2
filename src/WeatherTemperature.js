import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  if (unit === "celsius") {
    return (
      <span className="WeatherTermperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">°C </span>
      </span>
    );
  }
}
