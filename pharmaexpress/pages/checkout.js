import Header from '@/components/navbar.js'

export default function Checkout(){
    return(
        <div>
            <Header/>
            <h1 className='text-3xl font-bold'>Checkout</h1>

            <form>
                <input></input>
            </form>

            <div>
                <button className='w-36 max-w-full h-10 rounded-md tracking-wider bg-blue-600 text-white font-bold mx-2'>
                    Gcash  
                </button>
                <button className='w-36 max-w-full h-10 rounded-md tracking-wider bg-green-600 text-white font-bold mx-2'>
                    Maya
                </button>
            </div>
        </div>
    )
}