import './products.css';
import React from 'react';
import { useState } from 'react';
import P from '../../assets/p1.jpg'
import Pi from '../../assets/p2.jpg'
import Pu from '../../assets/p3.jpg'
import Pt from '../../assets/p4 .jpg'
import Pr from '../../assets/p5.jpg'
import Pe from '../../assets/p6.jpg'

const ProductItem = ({ product  , addToCart}) => {
  return (
    <li className="product-item" id={product.key}>
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add To Cart</button>
    </li>
  );
};

const ProductList = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const products = [
    {
      key: 1,
      name: 'Product 1',
      description: 'A great product',
      price: '$10',
      img: P
    },
    {
      key: 2,
      name: 'Product 2',
      description: 'An even better product',
      price: '$20',
      img: Pi
    },
    {
      key: 3,
      name: 'Product 3',
      description: 'The best product yet',
      price: '$30',
      img: Pt
    },
    {
      key: 4,
      name: 'Product 1',
      description: 'A great product',
      price: '$10',
      img: Pe
    },
    {
      key: 5,
      name: 'Product 2',
      description: 'An even better product',
      price: '$20',
      img: Pr
    },
    {
      key: 6,
      name: 'Product 3',
      description: 'The best product yet',
      price: '$30',
      img: Pu
    }
  ];

  

  return (
    <>
      <ul className="product-list" id='prodct'>
        {products.map(product => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </ul>
      <Cart cart={cart} />
    </>
  );
};

const Cart = ({ cart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart" id='car'>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.key}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
      <p>Total Price: {totalPrice}</p>
      
    </div>
  );
};


export default ProductList;












