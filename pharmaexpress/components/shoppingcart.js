import styles from '@/styles/Cart.module.css'
import QuantityBtn from './quantitybutton';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import CartContent from './cartcontent';

export default function ShoppingCart({
    products,
    onProductRemove,
    onQuantityChange,
}){
      
    const [count, setCount] = useState(1);
    const [cartItems, setCartItems] = useState([]);
    const [quantity, setQuantity] = useState([]);
    const [item_and_quantity, setItemANDQuantity] = useState([])
    const [paymongo_url, setPaymongoURL] = useState('')
    const cookies = new Cookies();
    const username = cookies.get('username');

    useEffect(() => {
        fetchCartItems();
        fetchItemQuantity();
    }, []);

    useEffect(() => {
        if (cartItems.length > 0 && quantity.length > 0) {
            const item_purchaseDetails = cartItems.map((item, index) => ({
                currency: "PHP",
                name: item.name,
                amount: item.price * 100,
                quantity: quantity[index][0]
            }));
    
            setItemANDQuantity(item_purchaseDetails);
        }
    }, [cartItems, quantity]);

    const fetchCartItems = async () => {
        try {
        const response = await axios.post('http://localhost:8080/api/get_cartItems', { username });
        setCartItems(response.data);
        } catch (error) {
        console.error('Error:', error);
        }
    };

    const fetchItemQuantity = async () => {
        try {
        const response = await axios.post('http://localhost:8080/api/get_itemQuantity', { username });
        setQuantity(response.data);
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

    const calculateItemTotal = (price, qty) => {
        return price * qty;
    };

    const calculateSubtotal = () => {
        let subtotal = 0;
        if (Array.isArray(cartItems) && cartItems.length > 0) {
        cartItems.forEach((item, index) => {
            const itemTotal = calculateItemTotal(item.price, quantity[index]);
            subtotal += itemTotal;
        });
        }
        return subtotal;
    };

    const subtotal = calculateSubtotal();

    const handleRemoveCartItem = async (id_item) => {
        try {
            const response = await axios.post('http://localhost:8080/api/remove_cartItem', { username, id_item });
            console.log(response.data);
            const { success } = response.data;
            if (success) {
                window.location.reload();
            } else {
                setError('Item does not Exist!');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleCheckout = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/checkout_system', { item_and_quantity });
            const checkout_url = response.data;
    
            await axios.post('http://localhost:8080/api/cart_to_order', { username }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            // Parsing the response and redirecting the customer for authentication
            console.log(checkout_url)
          
            // Option 1: similar behavior as an HTTP redirect
            window.location.replace(checkout_url);
        
            // Option 2: similar behavior as clicking on a link
            window.location.href = checkout_url;
        }
        catch (error) {
            console.error('Error:', error);
        }
    };
    
    return(
        <div className='px-10 overflow-hidden'>
            <div className="py-12 font-bold text-4xl text-center">
                <h1>Shopping Cart</h1>
            </div>
            <div className="products">
                {cartItems.length === 0 && (
                    <div className='font-light text-3xl text-center'>
                        There are no items in the basket
                    </div>
                )}
                {cartItems.length > 0 && (
                    <div className={styles.titles}>              
                        <h2 className={styles.item}>Item</h2>
                        <h2>Price</h2>
                        <h2>Quantity</h2>
                        <h2>Total</h2>
                    </div>
                )}
                {Array.isArray(cartItems) && cartItems.length > 0 && cartItems.map((item, index) => (
                    
                    <div className={styles.cartItem} key={item.id}>
                        <div className="flex w-full">

                            <img className={styles.imgStyle} src={item.image}/>
                            
                            <div className='self-center'>
                                <h3 className='text-xl'>{item.name}</h3>
                                <button 
                                    className='text-orange-600 text-sm hover:text-orange-400 font-medium'
                                    onClick={() => handleRemoveCartItem(item.id)}>
                                Remove
                                </button>
                            </div>   
                        </div>

                        <div className='text-xl'>
                            {item.price} PHP
                        </div>

                        <div className={styles.cartQuantity}>
                            <button className='py-3 px-6' onClick disabled={0 <= 1}>-</button>
                            <div className='py-3'>{quantity[index]}</div>
                            <button className='py-3 px-6' onClick>+</button>
                        </div>

                        <div className="text-xl">
                            {item.price * quantity[index]} PHP
                        </div>
                    </div>
                ))}
                {cartItems.length > 0 && (
                    <div className='flex justify-end py-10'>
                        <button className='w-48 max-w-full h-10 rounded-md tracking-wider bg-blue-600 text-white font-bold mx-2' onClick={handleCheckout}>
                            Proceed
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}