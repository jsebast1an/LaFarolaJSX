import { createContext, useState } from "react";

export const CartContext = createContext([]);

function CartContextProvider({children}) {

    const [cartList, setCartList] = useState([])

    function agregarAlCarrito (item) {
            const index = cartList.findIndex((i) => i.id === item.id)
            
            if (index > -1) {
                cartList.splice(index, 1, item)
            } else {
                setCartList([...cartList, item])
            }
    }

    function borrarCarrito () {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            borrarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

