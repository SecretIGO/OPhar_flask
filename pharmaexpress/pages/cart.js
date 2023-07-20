import Header from '../components/navbar.js'
import ShoppingCart from '@/components/shoppingcart.js'
import CartContent from '@/components/cartcontent.js'
import { useContext } from 'react'
import { cartContext } from './_app.js'

export default function Checkout(){

    const cartItems = useContext(cartContext)
    
    return(
        <div>
            <Header/>
            <ShoppingCart products={cartItems}/>
        </div>
    )
}

