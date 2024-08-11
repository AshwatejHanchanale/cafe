import React from 'react';
import '../styles/cards.css'

const Cards = ({ item, handleClick }) => {
  const { name, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="Image" />
      </div>
      <div className="details">
        <p>{name}</p>
        <p>Price - {price}Rs</p>
        <button onClick={() => handleClick(item)} >Add to Order</button>
      </div>
    </div>
  )
}

export default Cards