import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure React Router is installed
import './style.css';

const Main = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    { background: '#ee915c', content: ' ', img: '/img/almond_bg.png' },
    { background: '#ff94b0', content: '', img: '/img/rose_bg.png' },
    { background: '#c7c455', content: '', img: '/img/pista_bg.png' }
  ];

  const [leftMockup, setLeftMockup] = useState(0);
  const leftEachItem = 100 / (items.length - 1);
  const navigate = useNavigate(); // React Router hook for navigation

  const nextItem = () => {
    setActiveIndex((prevIndex) => (prevIndex >= items.length - 1 ? 0 : prevIndex + 1));
    setLeftMockup((prevLeft) => prevLeft + leftEachItem);
  };

  const prevItem = () => {
    setActiveIndex((prevIndex) => (prevIndex <= 0 ? items.length - 1 : prevIndex - 1));
    setLeftMockup((prevLeft) => prevLeft - leftEachItem);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextItem();
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const goToHome = () => {
    navigate('/home'); // Navigate to the home page
  };

  return (
    <div className="App">
      <header>
        <div>VELVET&WHISK</div>
        <nav>
          <button onClick={goToHome} className="home-button">Home</button>
        </nav>
      </header>

      <div className="carousel">
        <div className="list">
          {items.map((item, index) => (
            <div
              key={index}
              className={`${index === activeIndex ? 'active' : index < activeIndex ? 'hidden' : ''}`}
              style={{ '--background': item.background }}>
              <div className="content">{item.content}</div>
              <img src={item.img} className="fruit" alt={item.content} />
            </div>
          ))}
        </div>
        <div className="leaves"></div>
        <div className="mockup" style={{ '--left': `${leftMockup}%` }}></div>
        <div className="shadow"></div>
        <div className="arrow">
          <button id="prev" onClick={prevItem}>{'<'}</button>
          <button id="next" onClick={nextItem}>{'>'}</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
