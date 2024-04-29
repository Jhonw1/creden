import React, { useEffect, useState } from 'react'
import './Balotas.css'
import { Link } from 'react-router-dom';
export const Balotas = () => {
    const [numbers, setNumbers] = useState([0, 0, 0, 0]);
    const [isAutoRunning, setIsAutoRunning] = useState(false);
  
    useEffect(() => {
      let interval;
  
      if (isAutoRunning) {
        interval = setInterval(() => {
          const randomNumbers = Array.from({ length: 4 }, () => Math.floor(Math.random() * 9) + 1);
          setNumbers(randomNumbers);
        }, 200);
  
        setTimeout(() => {
          clearInterval(interval);
          setIsAutoRunning(false);
        }, 900);
      }
    }, [isAutoRunning]);
  
    const startAutoRun = () => {
      setIsAutoRunning(true);
    };
  
    return (
      <>
        <div className="billar-container">
          {numbers.map((number, index) => (
            <div className="ball" key={index}>
              <span>{number}</span>
            </div>
          ))}
        </div>
  
        <div className="button-container">
          <button className="circular-button correccionr" onClick={startAutoRun} disabled={isAutoRunning}>
            
          </button>
          <button className="circular-button correccionl" onClick={startAutoRun} disabled={isAutoRunning}>
            
          </button>
        </div>
        <div className='button-weird'>
          <Link className='linkkk' target='_blank' to='https://ventas.facilisimo.co/facilisimo/chance'> </Link>
        </div>
      </>
    );
  };