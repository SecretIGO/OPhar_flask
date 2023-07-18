import styles from '@/styles/Cart.module.css';
import QuantityBtn from './quantitybutton';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

export default function CartContent() {
  const [count, setCount] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const cookies = new Cookies();
      const username = cookies.get('username');
      const response = await axios.post('http://localhost:8080/api/get_cartItems', { username });
      setCartItems(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const addQuantity = () => {
    setCount(count => count + 1);
  };

  const minusQuantity = () => {
    setCount(count => count - 1);
  };

  const samplePrice = 299;
  const totalPrice = samplePrice * count;

  return (
    <div className='px-10'>
      <div className="py-12 font-bold text-4xl text-center">
        <h1>Shopping Cart</h1>
      </div>

      <div className={styles.titles}>
        <h2>Item</h2>
        <h2>Price</h2>
        <h2>Quantity</h2>
        <h2 className={styles.total}>Total</h2>
      </div>

      <div className='cart-items'>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <div className={styles.cartProduct}>
              <div className={styles.imgStyle}>
                <img src={item.image} alt={item.name} />
              </div>

              <div className='self-center'>
                <h3 className='text-2xl'>{item.name}</h3>
                <button className='text-gray-500 text-base hover:text-black'>Remove</button>
              </div>
            </div>

            <div className='price'>{item.price}</div>

            <div>
              <QuantityBtn
                itemCount={count}
                onDecrement={minusQuantity}
                onIncrement={addQuantity}
              />
            </div>

            <div className={styles.totalPrice}>{totalPrice}</div>
          </div>
        ))}
      </div>

      <div className='flex justify-between items-start border-t border-black pt-6'>
        <button className={styles.buttonStyle}>Clear cart</button>
        <div className='cart-checkout'>
          <div className='flex justify-between text-xl mb-6'>
            <span>Subtotal</span>
            <span className='font-bold'>{totalPrice}</span>
          </div>
          <button className={styles.buttonStyle}>Mark as Emergency</button>
          <form action='/create-checkout' method='POST'>
            <button type='submit' className={styles.buttonStyle}>Check out</button>
          </form>
        </div>
      </div>
    </div>
  );
}