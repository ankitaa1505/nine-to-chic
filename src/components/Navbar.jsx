import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";


function Navbar() {
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  return (
    <nav style={styles.nav}>

      <h2 style={styles.logo}>OfficeMuse</h2>

      <div style={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/tops">Tops</Link>
        <Link to="/bottoms">Bottoms</Link>
        <Link to="/cart">
           Bag({cart.length})
        </Link>
         <Link to="/wishlist">
         ❤️ Wishlist ({wishlist.length})
         </Link>
      </div>

    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    backgroundColor: "#fff",
    borderBottom: "1px solid #ddd",
  },
  links: {
    display: "flex",
    gap: "15px",
  },
  logo: {
    fontWeight: "bold",
  },
};

export default Navbar;