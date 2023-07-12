import Featured from '@/components/featuredproduct.js'
import Header from '../components/navbar.js'
import NewProducts from '../components/newproducts.js'
import Data from '../json/Products.json'

export default function Home({featuredProduct, newProducts}){
    return(
        <div>
            <Header/>
            <Featured/>
            <NewProducts products={newProducts}/>
        </div>
    )
}

export async function getStaticProps() {

    const featuredProductId = 'your-featured-product-id';
    const featuredProduct = Data.find((product) => product.id === featuredProductId);
  
    const newProducts = Data.slice(0, 10);
    // console.log(newProducts)
  
    return {
      props: {
        newProducts,
      },
    };
  }




