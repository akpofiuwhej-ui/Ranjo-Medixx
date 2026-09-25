import {useContext} from "react"
import {CartContext} from "../context/CartContext"

export default function ProductCard({product}){

const {addToCart} = useContext(CartContext)

return(

<div className="bg-white shadow rounded-lg p-4">

<img
src={product.image}
className="h-40 w-full object-cover rounded"
/>

<h2 className="font-bold mt-2">
{product.name}
</h2>

<p className="text-gray-600">
₦{product.price}
</p>

<button
onClick={()=>addToCart(product)}
className="bg-blue-700 text-white w-full mt-3 py-2 rounded"
>

Add to Cart

</button>

</div>

)

}