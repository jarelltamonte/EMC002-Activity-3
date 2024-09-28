import React from 'react';
import '../App.css'

const Cart = ({ cartItems, setCartItems }) => {

  const removeFromCart = (id) => {
    fetch(`http://localhost:5000/cart/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => setCartItems(data))
    .catch(error => console.error('Error removing from cart:', error));
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.product.id}>
              {item.product.name} - {item.quantity} x ${item.product.price}
              <div className="button-cart">
               <button className="button-remove" onClick={() => removeFromCart(item.product.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;