import styles from '@/styles/Cart.module.css'
import QuantityBtn from './quantitybutton'

/*
    <div className='h-screen bg-blue-300 rounded-2xl'>
    </div>
*/

export default function CartContent(){
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
                        200php
                    </div>

                    <div>
                        <QuantityBtn></QuantityBtn>
                    </div>
                    <div className={styles.totalPrice}>200php</div>
                </div>
            </div>
            
            <div className='flex justify-between items-start border-t border-black pt-6'>
                <button className={styles.buttonStyle}>Clear cart</button>
                <div className='cart-checkout'>
                    <div className='flex justify-between text-xl mb-6'>
                        <span>Subtotal</span>
                        <span className='font-bold'>200php</span>
                    </div>
                    <button className={styles.buttonStyle}>Mark as Emergency</button>   
                    <button className={styles.buttonStyle}>Check out</button>
                </div>
            </div>
        </div>
    )
}


