import styles from '../styles/QuantityBtn.module.css'

export default function QuantityBtn({itemCount,onDecrement,onIncrement}){


    return(
        <div className={styles.cartQuantity}>
            <button className='py-3 px-6' onClick={onDecrement} disabled={itemCount <= 1}>-</button>
            <div className='py-3'>{itemCount}</div>
            <button className='py-3 px-6' onClick={onIncrement}>+</button>
        </div>
    )
}