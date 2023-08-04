import React, { useState, useEffect } from 'react';
import { info } from './info';

const Home = () => {
  const [value, setValue] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(info);
      const infoData = await response.json();
      setValue(infoData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    < >
    <div className='content'>
      {value.map(({ title, price, articul, color, imgSrc }) => (
        <div className='parent' key={articul}>
          <div className='child'>
          <img className="image" src={`infoData${imgSrc}`} alt="nkar" />
          <h2 className='h2'>{title}</h2>
          <span className='span'>color:{color}</span>
          <span className='span'>articul:{articul}</span>
          <span className='span1'>{price}</span>
          <button>Add to cart</button>
        </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default Home;