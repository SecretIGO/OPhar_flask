import Header from "@/components/navbar"
import ProductGrid from "@/layout/productgrid";
import Data from '../json/Products.json'

export default function Store({products}){
  
    return(
        <div>
            <Header/>
            <ProductGrid products={products}/>
        </div>
    )
}

export function getStaticProps() {
  
    const slicedData = Data.slice(0, Data.length + 1)
    const products = slicedData.sort((a, b) => a.id - b.id)
  
    return {
      props: {
        products
      },
    };
  }