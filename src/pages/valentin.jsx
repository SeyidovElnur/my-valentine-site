import React, { useState } from 'react';
import "./valentin.css";
import heartImg from '../img/heart.jpg';
import zaykaImg from '../img/zayka.jpg';

function Valentin() {
  const [step, setStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // Управляет видимостью всей группы

  const steps = [
    { img: heartImg, text: "Click on the heart", size: 150 },
    { img: heartImg, text: "Again", size: 200 },
    { img: heartImg, text: "One more time, please...", size: 280 },
    
    { 
      img: zaykaImg, 
      // Используем массив или фрагмент для переноса строки
      text: (
        <>
          Thank you. <br /> 
          I'm very glad we know each other❤️
        </>
      ), 
      size: 250 
    }
  ];

  const handleClick = () => {
    if (step < steps.length - 1) {
      if (step === 2) {
        // Логика для плавного перехода к зайчику
        setIsVisible(false); // Начинаем исчезновение текста и сердца
        
        setTimeout(() => {
          setStep(step + 1); // Меняем контент, пока его не видно
          setIsVisible(true); // Плавно проявляем всё вместе
        }, 600); // Время на исчезновение старого контента
      } else {
        setStep(step + 1);
      }
    }
  };

  const current = steps[step];

  return (
    <div className="valentin-page">
      <div className="valentin-container">
        {/* Добавляем обертку с общим opacity */}
        <div 
          className={`heart-click ${!isVisible ? 'fade-out' : 'fade-in'}`} 
          onClick={handleClick}
          style={{ 
            opacity: isVisible ? 1 : 0, 
            transition: step === 3 ? 'opacity 0.8s ease-in-out' : 'opacity 0.2s' 
          }}
        >
          <div className="img-wrapper">
            <img 
              src={current.img} 
              alt="Valentine" 
              className="heart-img"
              style={{ width: `${current.size}px` }} 
            />
          </div>
          <p className="valentin-text">{current.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Valentin;