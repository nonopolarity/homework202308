import { useState, useEffect, useCallback } from "react";
import "./App.css";

// The NASA website cannot give out any API key
// const apiURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2023-08-01&api_key=DEMO_KEY&page=1`;
const apiURL = `dataEarlier.json`;
const imagesPerPage = 5;

function App() {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(0);

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((err) => console.log("ERROR", err));
  }, []);

  const pageNumMax = data === null ? 0 : Math.ceil(data.photos.length / imagesPerPage) - 1;

  const handleNextPage = useCallback(
    () =>
      setPageNum((i) => {
        console.log("INSIDE handleNextPage ", i);
        if (data === null) return 0;
        else {
          const newPageNum = Math.min(
            i + 1,
            Math.ceil(data.photos.length / imagesPerPage) - 1
          );
          console.log("newPageNum", newPageNum);
          return newPageNum;
        }
      }),
    [data]
  );

  const handlePrevPage = useCallback(
    () =>
      setPageNum((i) => {
        console.log("INSIDE handleNextPage ", i);
        if (data === null) return 0;
        else {
          const newPageNum = Math.max(i - 1, 0);
          console.log("newPageNum", newPageNum);
          return newPageNum;
        }
      }),
    [data]
  );

  return (
    <div className="App">
      <h1>About the Program</h1>
      <main>
        <figure className="hero">
          <img src="/images/rover_hero.jpg" />
          <figcaption>Curiosity rover image</figcaption>
        </figure>

        <section className="intro">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
            ultrices mi sit amet viverra. Vestibulum commodo nulla sit amet
            nulla molestie, ut sollicitudin arcu laoreet. Ut lorem urna,
            vulputate ut mauris sed, hendrerit tempor nulla. Sed nisl nisl,
            pretium vitae vehicula id, tempor sit amet nisi. Duis vitae augue
            vitae erat volutpat iaculis a ut purus. Duis porta nec ex vitae
            consectetur. Praesent dolor lorem, auctor quis tempus eu, pharetra
            in odio. Vestibulum non libero fringilla, lobortis dolor nec, tempor
            velit. Vivamus euismod massa et orci tincidunt tincidunt. Vivamus
            fringilla nibh vel arcu malesuada feugiat. In hac habitasse platea
            dictumst. Morbi feugiat erat neque, sed posuere augue interdum eu.
          </p>
          <p>
            Phasellus ac imperdiet neque, at vestibulum tortor. Ut sed blandit
            ante. Vestibulum eu libero eros. Praesent venenatis dictum faucibus.
            Aliquam erat volutpat. Proin sollicitudin varius urna viverra
            ultricies.
          </p>

          <nav className="other-pages">
            <button>View Images By Dates</button>
            <button>View Weather</button>
          </nav>
        </section>
      </main>

    <h2 className="carousel-heading">Curiosity rover images from today</h2>
      <div className="carousel">
        {pageNum !== 100 && <button className="prev-button" disabled={pageNum === 0} onClick={handlePrevPage}>&lsaquo;</button>}
        {data &&
          data.photos
            .slice(pageNum * imagesPerPage, (pageNum + 1) * imagesPerPage)
            .map((e) => <img src={e.img_src} />)}
        {pageNum !== pageNumMax + 1000 && (
          <button disabled={pageNum === pageNumMax} onClick={handleNextPage}>&rsaquo;</button>
        )}
      </div>
      <pre>{JSON.stringify(data?.photos?.length)}</pre>
      <pre>{JSON.stringify(pageNumMax)}</pre>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
  );
}

export default App;
