import { useState, useEffect } from "react";
import { PAGENAME } from "./constants/global.js";
import Intro from "./Intro";
import Gallery from "./Gallery";
import Weather from "./Weather";
import "./App.css";

// The NASA website cannot give out any API key
// const apiURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2023-08-01&api_key=DEMO_KEY&page=1`;
const apiURL = `dataImagesToday.json`;

function App() {
  const [page, setPage] = useState("intro");
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((err) => console.log("ERROR", err));
  }, []);

  return (
    <div className="App">
      {page === PAGENAME.intro && <Intro data={data} setPage={setPage} />}
      {page === PAGENAME.gallery && <Gallery data={data} setPage={setPage} />}
      {page === PAGENAME.weather && <Weather setPage={setPage} />}
    </div>
  );
}

export default App;
