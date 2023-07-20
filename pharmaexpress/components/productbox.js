import Link from 'next/link'
import styles from '../styles/ProductBox.module.css'

export default function ProductBox({product}){

    const url = `/product/${product.id}`

    return(
        <div>
            <Link href={url}>
                <div className={styles.white_box}>
                    <img className={styles.imgStyle} src={product.image}/>
                </div>
                <div className={styles.product_info}>
                    <h1 className='text-lg font-bold p-2'>
                        {product.name}
                    </h1>
                    
                    <div className={styles.price_row}>
                        <div className='text-xl font-light text-right'>
                            P {product.price}
                        </div>
                        <div className='bg-blue-700 text-center text-sm p-3 rounded-full font-bold text-white border shadow-md'>
                                Read More
                        </div>
                    </div>     
                </div>
            </Link>
        </div>
    )
}