import React from "react";
import "./Weather.css";

export default function Weather(){
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-8">
                <input type="search" placeholder="Enter a City..." className="form-control" />
                </div>
                <div className="col-4">
                <input type="submit" value="Search" className="btn btn-primary" />
                </div>
                </div>
            </form>
            <h1>New York</h1>
            <ul>
                <li>Thursday 12:00</li>
                <li>Partly Cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="partly cloudy" />
                    3°C
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 0%</li>
                        <li>Humidity: 40%</li>
                        <li>Wind: 21 km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}