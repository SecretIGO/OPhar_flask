import { CartProvider } from "./CartContext";

export function GlobalProvider({children}){
    return <CartProvider>{children}</CartProvider>
}