import styles from '../styles/ProductGrid.module.css'
import ProductBox from '@/components/productbox'

export default function ProductGrid({products}){
    return(
        <div className={styles.productgrid}>
            {products?.length > 0 && products.map(product => (
                <ProductBox key={product.id} product={product} _id={product}/>
            ))}
        </div>
    )
}