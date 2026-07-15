import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

    const [cart, setCart] = useState(() => {

        const savedCart = localStorage.getItem("cart");
        return savedCart
            ? JSON.parse(savedCart)
            : [];
    });
    useEffect(() => {
        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );
    }, [cart]);
    const addToCart = (food) => {
        const exist = cart.find(
            item => item.id === food.id
        );
        if (exist) {
            setCart(
                cart.map(item =>
                    item.id === food.id
                        ?
                        {
                            ...item,
                            quantity: item.quantity + 1
                        }
                        :
                        item
                )
            );
        }
        else {
            setCart([
                ...cart,
                {
                    ...food,
                    quantity: 1
                }
            ]);
        }
    };
    const removeFromCart = (id) => {
        setCart(
            cart.filter(
                item => item.id !== id
            )
        );
    };
    const clearCart = () => {
        setCart([]);
    };
    const updateQuantity = (id, type) => {
        setCart(
            cart.map(item => {
                if (item.id === id) {
                    let quantity = item.quantity;
                    if (type === "increase") {
                        quantity++;
                    }
                    if (type === "decrease" && quantity > 1) {
                        quantity--;
                    }
                    return {
                        ...item,
                        quantity
                    };
                }

                return item;

            })
        );
    };
    return (

        <CartContext.Provider

            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart
            }}

        >
            {children}

        </CartContext.Provider>
    );
}
export default CartProvider;