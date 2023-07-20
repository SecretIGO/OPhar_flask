import styles from '../styles/Featured.module.css'
import SearchBar from '../components/searchbar'
import Image from 'next/image'
import Link from 'next/link'

export default function FeauturedProduct({product}){

    if (!product) {
        return <div>Loading...</div>; 
      }

    const url = `/product/${product.id}`

    return(
        
        <div className = {styles.wrapper}>
            <div className={styles.container}>
                <SearchBar/>
                <div className = {styles.featured_bg}>
                    <Image
                        src={product.image}
                        height={280}
                        width={280}
                    />
                    <div className='text-white flex flex-col gap-4'>
                        <div className='py-4'>
                            <h1 className='text-3xl font-bold'>{product.name}</h1>
                            <h1 className='text-xl font-light pt-2'>{product.category}</h1>
                        </div>
                 
                        <p className='text-lg w-5/6'>
                            {product.description}
                        </p>
                            <Link href={url} className='w-1/5 bg-orange-500 text-center text-sm p-3 rounded-full font-bold text-white shadow-2xl'>
                                Read more
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}