import React, { useEffect, useState } from 'react';
import deal1 from '../images/deals/download.jpeg';
import deal2 from '../images/deals/61-4GVE-OgL._SR1236,1080_.jpg';
import deal3 from '../images/deals/71zXYC8yVwL._SR1236,1080_.jpg';

import '../css/slide.css';

function Slides() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 3); // Loop through slides
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(intervalId);
  }, []);

  const slides = [deal1, deal2, deal3];

  return (
    <div className="slider">
      <div className="slides">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={`slide ${index === slideIndex ? 'displayslide' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slides;