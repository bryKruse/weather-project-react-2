import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="New York"/>
      <footer>
        This project was coded by{" "} 
        <a href="https://www.linkedin.com/in/brynn-kruse-0b154017b/" target="_blank" rel="noreferrer">Brynn Kruse</a>
        , and it is{" "}
        <a href="https://github.com/bryKruse/weather-project-react-2" target="_blank" rel="noreferrer">
          open-sourced on GitHub
        </a>
        .
      </footer>
      </div>
    </div>
  );
}


