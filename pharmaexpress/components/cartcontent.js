import styles from '@/styles/Cart.module.css'
import QuantityBtn from './quantitybutton'
import { useState } from 'react'

/*
    <div className='h-screen bg-blue-300 rounded-2xl'>
    </div>
*/

export default function CartContent(){

    const [count, setCount] = useState(1)

    const addQuantity = () =>{
        setCount(count => count + 1)
    }

    const minusQuantity = () =>{
        setCount(count => count - 1)
    }
    

    const samplePrice = 299;
    const totalPrice = samplePrice * count;

    return(

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
                <div className={styles.cartItem}>       
                    <div className={styles.cartProduct}>
                        <div className = {styles.imgStyle}>
                            <img src='/assets/pills1.png'/>
                        </div> 

                        <div className='self-center'>
                            <h3 className='text-2xl'>Product Name</h3>
                            <button className='text-gray-500 text-base hover:text-black'>Remove</button>
                        </div>
                    </div>

                    <div className='price'>
                        {samplePrice}
                    </div>

                    <div>
                        <QuantityBtn 
                            itemCount={count}
                            onDecrement={minusQuantity}
                            onIncrement={addQuantity}             
                        />
                    </div>
                    <div className={styles.totalPrice}>{totalPrice}</div>
                </div>
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
    )
}


