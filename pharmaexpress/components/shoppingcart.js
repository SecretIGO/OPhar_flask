import styles from '@/styles/Cart.module.css'

export default function ShoppingCart({
    products,
    onProductRemove,
    onQuantityChange,
}){

    return(
        <div className='px-10 overflow-hidden'>
            <div className="py-12 font-bold text-4xl text-center">
                <h1>Shopping Cart</h1>
            </div>
            <div className="products">
                {products.length === 0 && (
                    <div className='font-light text-3xl text-center'>
                        There are no items in the basket
                    </div>
                )}
                {products.length > 0 && (
                    <div className={styles.titles}>              
                        <h2 className={styles.item}>Item</h2>
                        <h2>Price</h2>
                        <h2>Quantity</h2>
                        <h2>Total</h2>
                    </div>
                )}

                {products.map(product => (
                    <div className={styles.cartItem} key={product.id}>
                        <div className="flex w-full">

                            <img className={styles.imgStyle} src={product.image}/>
                            
                            <div className='self-center'>
                                <h3 className='text-xl'>{product.drug_brand}</h3>
                                <button 
                                    className='text-orange-600 text-sm hover:text-orange-400 font-medium'
                                    onClick={() => onProductRemove(product)
                                }>
                                Remove
                                </button>
                            </div>   
                        </div>

                        <div className='text-xl'>
                            {product.price} PHP
                        </div>

                        <div className={styles.cartQuantity}>
                            <button className='py-3 px-6' onClick disabled={0 <= 1}>-</button>
                            <div className='py-3'>1</div>
                            <button className='py-3 px-6' onClick>+</button>
                        </div>

                        <div className="text-xl">
                            {product.price * product.count} PHP
                        </div>
                    </div>
                ))}
                {products.length > 0 && (
                    <div className='flex justify-end py-10'>
                        <button className='w-48 max-w-full h-10 rounded-md tracking-wider bg-blue-600 text-white font-bold mx-2'>
                            Proceed
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}