/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css';


const Cart = ({ cart, handleRemoveFromCart }) => {

    let message;

    if (cart.length === 0) {
        message = <p>Please add some product</p>
    }
    else {
        message = <div>
            <h3>Boroloxxxxxxxx</h3>
            <p>thanks for giving your money</p>
        </div>
    }

    return (
        <div>
            <h4 className={cart.length === 1 ? 'blue' : 'red'}>Order summary: {cart.length}</h4>
            <p className={`bold ${cart.length === 3 ? 'yellow' : 'purple'}`}>Something</p>
            {
                cart.length > 2 ?
                    <span className='purple'>Aro kino</span>
                    : <span>Fokiraa</span>
            }
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}>
                    {tshirt.name}
                    <button
                        onClick={() => handleRemoveFromCart(tshirt._id)}
                    >X</button></p>)
            }
            {
                cart.length === 2 && <p>Double bonanza</p>
            }
            {
                cart.length === 3 || <h3>Tinta to hoilo na!!!!!!!!!!!</h3>
            }
        </div>
    );
};

export default Cart;


/***
 * CONDITIONAL RENDERING
 * 1. Use if or if else to set a variable that will contain an element..
 * 2. ternary operator : condition ? 'for true' : 'for false'..
 * 3. Logical && : (if the condition is true then the next things will displayed)..
 * 4. Logical || : (if the condition is false then the next things will displayed)
 */ 

/***
 * CONDITIONAL CSS CLASS
 *  1. Use ternary
 *  2. Ternary inside template string
 */ 