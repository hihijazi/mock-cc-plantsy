import React, { useState } from "react";

function PlantCard( { plant } ) {

  const { name, price, image } = plant 

  const [isInStock, setIsInStock] = useState (true);

  const handleToggleStock = () => {
    setIsInStock(!isInStock);
  };

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button onClick={handleToggleStock} className="primary">In Stock</button>
      ) : (
        <button onClick={handleToggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
