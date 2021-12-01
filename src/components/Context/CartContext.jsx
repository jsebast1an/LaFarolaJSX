import { createContext, useState, useContext } from "react";


export const CartContext = createContext([]);

export const useCartContext = ()=>{
    return useContext(CartContext)
}

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

    function borrarProducto (item) {
        setCartList(cartList.filter((i) => i.id !== item));
    }

    const totalCarrito = cartList.reduce( (acc, item) => acc = acc + (item.precio * item.cantidad), 0)

    const cartCantidad = cartList.length

    return (
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            borrarCarrito,
            borrarProducto,
            totalCarrito,
            cartCantidad
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

