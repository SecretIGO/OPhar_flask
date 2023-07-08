import Header from "@/components/navbar"
import QuantityBtn from "@/components/quantitybutton"

export default function ProductPage({product}){
    return(
        <div>
            <Header/>
            <div className='flex h-screen'>
                <div>
                    
                </div>
                <div>
                    <h1>Product Name</h1>
                    <h1>In stock</h1>
                    <div>
                        <h1>Quantity</h1>
                        <QuantityBtn/>
                    </div>
                </div>

            </div>
        </div>
    )
    
}