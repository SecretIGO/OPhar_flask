import Link from 'next/link'
import styles from '../styles/ProductBox.module.css'
import Image from 'next/image';


export default function ProductBox({name,image,price}){
    return(
        <div>
            <div className={styles.white_box}>
                    <img className={styles.imgStyle}/>
            </div>
            <div className={styles.product_info}>
                <Link href=''>
                    <h1 className='text-lg font-bold p-2'>
                        {name}
                    </h1>
                </Link>
                <div className={styles.price_row}>
                    <div className='text-xl font-light text-right'>
                        {price}
                    </div>
                    <div className='bg-blue-700 text-center text-sm p-3 rounded-full font-bold text-white border shadow-md'>
                        <Link href=''>
                            Add to cart
                        </Link>
                    </div>
                </div>     
            </div>
        </div>
    )
}