import Link from 'next/link'
import styles from '../styles/ProductBox.module.css'

export default function ProductBox({product}){

    const url = `/product/${product.id}`

    return(
        <div>
                <div className={styles.white_box}>
                    <img className={styles.imgStyle} src={product.image}/>
                </div>
                <div className={styles.product_info}>
                    <h1 className='text-xl font-bold pt-2'>
                        {product.name}
                    </h1>
                    
                    <div className={styles.price_row}>
                        <div className='text-lg font-light text-right'>
                            PHP {product.price}
                        </div>
                        <Link href={url} className='bg-blue-700 text-center text-sm p-3 rounded-full font-bold text-white shadow-md'>
                                Read More
                        </Link>
                    </div>     
                </div>
        </div>
    )
}