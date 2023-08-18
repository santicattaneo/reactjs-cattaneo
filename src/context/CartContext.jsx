import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider({children}) {
    const [cart, setCart] = useState([])
    function addItem(item, quantity) {
        if (isInCart(item.id)) {
            setCart(cart.map((product) => {
                if(product.id === item.id){
                    return{...product, quantity: product.quantity + quantity}
                } else {
                    return product
                }
            }))
        } else{
            setCart([...cart, {...item, quantity}])
        } 
    }
    function clear() {
        setCart([])
    }
    function isInCart (id) {
        return cart.some((item) => item.id === id)
    }
    function deleteItem (id) {
        setCart(cart.filter((item) => item.id !== id))
    }
    function cartQuantity() {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }
    function total () {
        return cart.reduce((acc, item) => acc + item.quantity * item.precio, 0)
    }
    return(
        <CartContext.Provider value={{cart, addItem, clear, deleteItem, cartQuantity, total}}>
            {children}
        </CartContext.Provider>
    )
} 