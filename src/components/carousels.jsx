import { useState, useEffect } from "react";
import "../App.css";

export const HorizontalCarousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  return (
    <section className="carousel-container">
      <section className="carousel-wrapper">
        {currentIndex > 0 && (
          <button className="left arrow" onClick={prev}>
            &lt;
          </button>
        )}
        <section className="carousel-content-wrapper">
          <figure
            className="carousel-content"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </figure>
        </section>
        {currentIndex < length - 1 && (
          <button className="right arrow" onClick={next}>
            &gt;
          </button>
        )}
      </section>
    </section>
  );
};

export const VerticalCarousel = ({ children }) => {};