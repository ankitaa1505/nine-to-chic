import "../styles/ProductCard.css";
import { Link } from "react-router-dom";
function ProductCard(props){

    return(
        <Link to={`/product/${props.id}`}>
        <div>

            <img
             src={props.image}
             alt={props.name}
             width="200"
            />

            <h3>{props.name}</h3>

            <p>₹{props.price}</p>

            <p>⭐ {props.rating}</p>

            <button
onClick={() => addToCart(product)}
>
Add To Bag
</button>
        </div>
        </Link>
    );
}

export default ProductCard;