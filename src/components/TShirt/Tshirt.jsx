/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt, handleAddToCart}) =>{

    const {price, name, picture} = tshirt;

    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price : ${price}</p>
            <button onClick={() => handleAddToCart()}>Buy Now</button>
        </div>
    );
};

export default Tshirt;