"use client";

import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router.js'

const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const router = useRouter

    useEffect(() => {
        setCartToState()
    }, [])

    const setCartToState = () => {
        setCart(
            localStorage.getItem('cart')
            ? JSON.parse(localStorage.getItem('cart'))
            : []
        )
    }

    const addItem = async ({
        product,
        brand,
        name,
        price,
        image,
        quanitity = 1,
    }) => {
        const item = {
            product,
            brand,
            name,
            price,
            image,
            quantity,
        };

        const isItemExist = cart?.cartItems?.find(
            (i) => i.product === item.product
        )

        let newCartItems;

        if(isItemExist){
            newCartItems = cart?.cartItems?.map((i) =>
                i.product === isItemExist.product ? item : i
            )
        } else {
            newCartItems = [...(cart?.cartItems || []), item]
        }

        localStorage.setItem("cart", JSON.stringify({cartItems : newCartItems}))
    }

    return(
        <CartContext.Provider
            value={{
                cart,
                addItem
            }}
            
        >
        {children}
        </CartContext.Provider>
    )
    
}

export default CartContext;