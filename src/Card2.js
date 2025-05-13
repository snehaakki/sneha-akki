import React from 'react';
import ProductCard from './productcard';

const Card2 = () => {
  return (
    <div style={{ padding: 40 }}>
      <ProductCard
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQySeo0KLCb5ukiEUZ7mioIlAMtyulW2dXw&s"
        title="phones"
        price="$99.99"
      />
    </div>
  );
};

export default Card2;