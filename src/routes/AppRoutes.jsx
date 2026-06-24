import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductDetails from "../pages/ProductDetails"
import Wishlist from "../pages/Wishlist";;
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Tops from "../pages/Tops";
import Bottoms from "../pages/Bottoms";

function AppRoutes() {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Category Pages */}
        <Route path="/tops" element={<Tops />} />
        <Route path="/bottoms" element={<Bottoms />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;