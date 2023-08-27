import { PAGENAME } from "./constants/global.js";
import "./Gallery.css";

function Gallery({ data, setPage }) {
  const handleGoBack = () => {
    setPage(PAGENAME.intro);
  };

  return (
    <div className="Gallery">
      <h1>Mars Images By Date</h1>

      <div className="gallery-container">
        {data &&
          data.photos.map((e) => (
            <div key={e.id} className="image-container">
              <img src={e.img_src} alt={`id ${e.id}`} />
            </div>
          ))}
      </div>
      <button className="nav-button" onClick={handleGoBack}>
        Back
      </button>
    </div>
  );
}

export default Gallery;
