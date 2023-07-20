import styles from '../styles/ProductBox.module.css'

export default function ProductBox({product,_id}){

    const url = '/product/' + _id

    //const cartItems = useContext(cartContext)

    const addProduct = (product) =>{
        const newProduct = {
            ...product,
            count: 1,
        }
        setProducts([
            ...cartItems,
            newProduct,
        ])
    }

    return(
        <div>
            <div className={styles.white_box}>
                    <img className={styles.imgStyle} src={product.image}/>
            </div>
            <div className={styles.product_info}>
                <h1 className='text-lg font-bold p-2'>
                    {product.drug_brand}
                </h1>
                
                <div className={styles.price_row}>
                    <div className='text-xl font-light text-right'>
                        {product.price}
                    </div>
                    <div className='bg-blue-700 text-center text-sm p-3 rounded-full font-bold text-white border shadow-md'>
                        <button onClick={() => addProduct(product)}>
                            Add to cart
                        </button>
                    </div>
                </div>     
            </div>
        </div>
    )
}