import '@/styles/globals.css'
import { createContext, useState} from 'react'

export const cartContext = createContext()

export default function App({ Component, pageProps }) {

  const [productsInCart, setProducts] = useState([])

  return (
    <div>
      <cartContext.Provider value={productsInCart}>
        <Component {...pageProps} />
      </cartContext.Provider>
    </div>
  )
}
