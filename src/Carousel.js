import { useState, useCallback } from "react";
import "./Carousel.css";

export default function Carousel({ heading, images, imagesPerPage }) {
  const [pageNum, setPageNum] = useState(0);

  const pageNumMax =
    images === null ? 0 : Math.ceil(images.length / imagesPerPage) - 1;

  const handleNextPage = useCallback(
    () => setPageNum((i) => Math.min(i + 1, pageNumMax)),
    [pageNumMax]
  );

  const handlePrevPage = useCallback(
    () => setPageNum((i) => Math.max(i - 1, 0)),
    []
  );

  return (
    <div className="carousel-container">
      <h2 className="carousel-heading">{heading}</h2>
      <div className="carousel">
        <button
          className="prev-button"
          disabled={pageNum === 0}
          onClick={handlePrevPage}
        >
          &lsaquo;
        </button>
        {images &&
          images
            .slice(pageNum * imagesPerPage, (pageNum + 1) * imagesPerPage)
            .map((e) => (
              <div key={e.id} className="carousel-image-container">
                <img src={e.url} alt={`id ${e.id}`} />
              </div>
            ))}
        <button disabled={pageNum === pageNumMax} onClick={handleNextPage}>
          &rsaquo;
        </button>
      </div>
      <div className="page-num-info">
        {images && (
          <div>
            Page {pageNum + 1}/{pageNumMax + 1}
          </div>
        )}
      </div>
    </div>
  );
}
