
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from "../data/products";
import { useParams } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";
function ProductDetails(){

    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const { addToWishlist } = useContext(WishlistContext);
    // STEP 6
    const product = products.find(
        (item) => item.id === Number(id)
    );
   


      return (
        <>
            <img
                src={product.image}
                alt={product.name}
                width="300"
            />

            <h1>{product.name}</h1>

            <h2>₹{product.price}</h2>

            <p>⭐ {product.rating}</p>

           <button onClick={() => addToCart(product)}>
           Add To Bag
           </button>
           <button onClick={() => addToWishlist(product)}>
           ❤️Add to Wishlist
           </button>
        </>
    );

}

export default ProductDetails;