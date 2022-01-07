import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          📌Find the Perfect Place to Travel with the Perfect Temperature
        </header>
        <Weather defaultCity="New York" />
        <footer>
          This app was coded/designed by{" "}
          <a
            href="https://www.linkedin.com/in/brynn-kruse-0b154017b/"
            target="_blank"
            rel="noreferrer"
            className="links"
          >
            Brynn Kruse
          </a>
          .
          <br />
          The code is{" "}
          <a
            href="https://github.com/bryKruse/weather-project-react-2"
            target="_blank"
            rel="noreferrer"
            className="links"
          >
            open-sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://romantic-mestorf-06a4a6.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="links"
          >
            Netlify
          </a>
          <br />
        </footer>
        <br />
      </div>
    </div>
  );
}
