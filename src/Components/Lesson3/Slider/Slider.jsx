// Slider.js
import React from 'react';

const Slider = ({ currentIndex, prev, next, array, imageStyle, buttonStyle, mainImageContainerStyle }) => {
  return (
    <div className="Slider">
      <div style={mainImageContainerStyle}>
        <button onClick={prev} style={buttonStyle}>
          Prev
        </button>
        <img
          src={array[currentIndex]}
          alt="Slide"
          style={imageStyle}
        />
        <button onClick={next} style={buttonStyle}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Slider;
