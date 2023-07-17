import styles from '../styles/Featured.module.css'
import SearchBar from '../components/searchbar'
import Image from 'next/image'
import Link from 'next/link'

export default function FeauturedProduct({product}){

    const url = "/product/" + product._id

    return(
        
        <div className = {styles.wrapper}>
            <div className={styles.container}>
                <SearchBar/>
                <div className = {styles.featured_bg}>
                    <Image
                        src={product.image}
                        height={350}
                        width={350}
                    />
                    <div className='text-white flex flex-col gap-4'>
                        <div className='py-2'>
                            <h1 className='text-3xl font-bold'>{product.drug_brand}</h1>
                            <h1 className='font-light'>{product.drug_name}</h1>
                        </div>
                 
                        <p className='text-lg w-5/6'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <Link href={url}>
                            <button className='w-1/5 bg-orange-500 text-center text-sm p-3 rounded-full font-bold text-white shadow-2xl'>
                                Read more
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}