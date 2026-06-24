import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
 const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
} = useContext(CartContext);
    

    if (cart.length === 0) {
        return <h1>Your Bag is Empty!</h1>;
    }
   
const total = cart.reduce(

    (sum,item)=>
        sum + item.price * item.quantity,

    0

);

    return (
        <>
            <h1>Shopping Bag</h1>

            {cart.map((item) => (
                <div key={item.id}>
                    <img src={item.image} width="150" />

                    <h3>{item.name}</h3>

                    <p>₹{item.price}</p>

                    <button onClick={() => removeFromCart(item.id)}>
                        Remove
                    </button>
                    <button
                   onClick={() => decreaseQuantity(item.id)}
                    >
                    -
                   </button>

                <span>{item.quantity}</span>

                 <button
                 onClick={() => increaseQuantity(item.id)}
                 >
                 +
                </button>
                <p>
                ₹{item.price * item.quantity}
                </p>
                <h2>Total: ₹{total}</h2>
                </div>
            ))}
        </>
    );
}

export default Cart;