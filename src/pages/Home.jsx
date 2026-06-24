import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

function Home(){
  const [search, setSearch] = useState("");
  const [category,setCategory] = useState("all");

    return(

        <>
        <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
        <select
value={category}
onChange={(e)=>setCategory(e.target.value)}
>

<option value="all">All</option>
<option value="tops">Tops</option>
<option value="bottoms">Bottoms</option>
<option value="accessories">Accessories</option>

</select>
        
            <h1>Trending Products</h1>
            <div className="product-grid">

            {
                products.filter((product)=>
product.name.toLowerCase().includes(search.toLowerCase())
)
.filter((product)=>
category==="all" || product.category===category
)
.map((product)=>(
<ProductCard
key={product.id}
id={product.id}
image={product.image}
name={product.name}
price={product.price}
rating={product.rating}
/>
))
            }
            </div>

        </>

    );
}

export default Home;