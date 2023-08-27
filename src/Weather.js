import { PAGENAME } from "./constants/global.js";
import "./Weather.css";

function Weather({ data, setPage }) {
  const handleGoBack = () => {
    setPage(PAGENAME.intro);
  };

  return (
    <div className="Weather">
      <h1>Mars Weather</h1>

      <h2 className="weather-container">
        Mars Weather data currently not available from NASA
      </h2>
      <button className="nav-button" onClick={handleGoBack}>
        Back
      </button>
    </div>
  );
}

export default Weather;
