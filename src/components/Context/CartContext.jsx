import React, { createContext, useState } from 'react';


const CartContext = createContext()

const CartProvider = (props) => {
    
    const [cartItems, setCartItems] = useState([]);


    const clearCart = () => {
        setCartItems([]);
    }

    const isInCart = (id) => {
        return cartItems.find((product) => product.id === id) ? true : false;
    }


    const removeProduct = (id) => {
        const newCartItems = cartItems.filter((cartItem) => cartItem.id !== id)
        setCartItems(newCartItems);
    }

    const addProduct = (item, quantity) => {

        if (isInCart(item.id)) {

            setCartItems(cartItems.map(product => {

                product.id === item.id ?

                    { ...product, quantity: product.quantity + quantity }
                    :

                    product
            }));
        } else {

            setCartItems([...cartItems, { ...item, quantity }]);
        }
    }

    const getTotalQuantity = () => {
        let cant = 0
        cart.forEach((e) => cant += e.quantity)
        return cant
    };


    const getTotal = () => {
        let total = 0
        cart.forEach((e) => total += (e.quantity * e.price))
        return total
    };

    return (




        <CartContext.Provider value={{ cartItems, addProduct, removeProduct, clearCart, isInCart }}>
            {/* props.children hace referencia a los componentes hijos que se van a renderizar dentro del proveedor de contexto CartContext.Provider. */}
            {props.children}
        </CartContext.Provider>
    );
}

export { CartProvider }
export default CartContext;

