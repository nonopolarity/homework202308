import { PAGENAME } from "./constants/global.js";
import Carousel from "./components/Carousel";
import "./Intro.css";

const imagesPerCarouselPage = 5;

function Intro({ data, setPage }) {
  const handleGoGalleryPage = () => {
    setPage(PAGENAME.gallery);
  };

  const handleGoWeatherPage = () => {
    setPage(PAGENAME.weather);
  };

  return (
    <div className="Intro">
      <h1>About the Program</h1>
      <main>
        <figure className="hero">
          <img src="/images/rover_hero.jpg" alt="rover hero" />
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
            <button className="nav-button" onClick={handleGoGalleryPage}>
              View Images By Dates
            </button>
            <button className="nav-button" onClick={handleGoWeatherPage}>
              View Weather
            </button>
          </nav>
        </section>
      </main>

      {data && (
        <Carousel
          heading="Curiosity rover images from today"
          images={data.photos.map((e) => ({ url: e.img_src, id: e.id }))}
          imagesPerPage={imagesPerCarouselPage}
        />
      )}
    </div>
  );
}

export default Intro;
