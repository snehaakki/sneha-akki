 import React from 'react';
import styled from 'styled-components';

const Card1 = styled.div`
  width: 300px;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

const Image = styled.div`
  width: 100%;
  height: 200px;
  background: url(${props => props.image}) center/cover no-repeat;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  text-align: center;
`;

const Price = styled.div`
  font-size: 18px;
  color: #27ae60;
  font-weight: 500;
`;

const ProductCard = ({ image, title, price }) => {
  return (
    <card1>
      <Image image={image} />
      <Title>{title}</Title>
      <Price>{price}</Price>
    </card1>
  );
};

export default ProductCard;

