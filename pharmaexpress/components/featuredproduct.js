import styles from '../styles/Featured.module.css'
import SearchBar from '../components/searchbar'

export default function FeauturedProduct(){
    return(
        
        <div className = {styles.wrapper}>
            <div className={styles.container}>
                <SearchBar/>
                <div className = {styles.featured_bg}>
                    <div className='text-white text-center'>
                        <h1 className='text-2xl font-bold'>Product Name</h1>
                        <p className='text-lg'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}