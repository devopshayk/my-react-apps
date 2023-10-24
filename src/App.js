// App.js
import React, { useState } from 'react';
import Slider from './Components/Lesson3/Slider/Slider';

function App() {
  const array = [
    'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8fHww',
    'https://t4.ftcdn.net/jpg/02/66/31/75/360_F_266317554_kr7DPOoM5Uty0YCeFU9nDZTt4a2LeMJF.jpg',
    'https://images.unsplash.com/photo-1592670130429-fa412d400f50?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D',
    'https://media.wired.com/photos/593261cab8eb31692072f129/master/w_2560%2C%c_limit/85120553.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Giant_Panda_2004-03-2.jpg/1200px-Giant_Panda_2004-03-2.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const imageStyle = {
    width: '300px',
    height: '300px',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + array.length) % array.length);
  };

  const next = () => {
    setCurrentIndex((currentIndex + 1) % array.length);
  };

  const buttonStyle = {
    cursor: 'pointer',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
  };

  const containerStyle = {
    marginTop: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
  };

  const mainImageContainerStyle = {
    marginTop: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
  };

  return (
    <Slider
      currentIndex={currentIndex}
      prev={prev}
      next={next}
      array={array}
      imageStyle={imageStyle}
      buttonStyle={buttonStyle}
      mainImageContainerStyle={mainImageContainerStyle}
    />
  );
}

export default App;
