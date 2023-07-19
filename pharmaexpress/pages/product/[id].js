import Header from "@/components/navbar"
import QuantityBtn from "@/components/quantitybutton"
import AddBtn from "@/components/AddCartBtn"
import styles from '@/styles/SingleProduct.module.css'
import Image from "next/image"
import { useState } from "react"

export default function ProductPage({product}){

    const [count, setCount] = useState(1)

    const addQuantity = () =>{
        setCount(count => count + 1)
    }

    const minusQuantity = () =>{
        setCount(count => count - 1)
    }

    return(
        <div>
            <Header/>
            <div className='h-screen flex justify-center'>
                <div className={styles.gridLayout}>
                    <div className='grid justify-center'>
                        <div className="bg-blue-300 p-10 border rounded-full shadow-xl">
                            <Image 
                            src='/assets/mask.png'
                            height={280}
                            width={280}
                            />
                        </div>

                    </div>
                
                        <div className="w-4/5">
                            
                            <div className = 'py-6'>
                                <h1 className="text-4xl font-bold">Product Brand</h1>
                                <h2 className="text-2xl font-light">Generic Name</h2>
                            </div>

                            <h2 className="text-2xl">In stock : 999 </h2>
                            <div className="my-6">
                                <div className="flex">
                                    <QuantityBtn 
                                        itemCount={count}
                                        onDecrement={minusQuantity}
                                        onIncrement={addQuantity}             
                                    />
                                    <div className = "w-1/5">
                                        <button>
                                            Add to cart
                                        </button>
                                    </div>             
                                </div>
                            </div>

                            <div className='text-lg text-justify mt-6'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>

                        </div>
                </div>
            </div>
        </div>
    )
}

