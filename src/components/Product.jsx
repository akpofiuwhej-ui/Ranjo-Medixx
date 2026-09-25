import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Product = ({ search }) => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: "Sulfuric Acid", price: 4500 },
    { id: 2, name: "Ethanol", price: 3000 },
    { id: 3, name: "Sodium Hydroxide", price: 2500 },
    { id: 4, name: "Acetone", price: 2000 },
  ];

  // 🔍 FILTER SEARCH
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search?.toLowerCase() || "")
  );

  return (
    <div className="p-6 grid md:grid-cols-3 gap-6">
      {filtered.map((product) => (
        <div key={product.id} className="bg-white rounded-xl shadow p-4">
          
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-gray-600 mb-3">₦{product.price}</p>

          <button
            onClick={() => addToCart(product)}
            className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600"
          >
            Add to Cart
          </button>

        </div>
      ))}
    </div>
  );
};

export default Product;