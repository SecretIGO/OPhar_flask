import styles from '../styles/QuantityBtn.module.css'

export default function QuantityBtn(){
    return(
        <div className={styles.cartQuantity}>
            <button className='py-3 px-6'>-</button>
            <div className='py-3'>1</div>
            <button className='py-3 px-6'>+</button>
        </div>
    )
}