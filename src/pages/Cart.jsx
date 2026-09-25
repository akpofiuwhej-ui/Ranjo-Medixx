import {useContext} from "react"
import {CartContext} from "../context/CartContext"
import CartItem from "../components/CartItem"
import {Link} from "react-router-dom"

export default function Cart(){

const {cart} = useContext(CartContext)

return(

<div className="max-w-4xl mx-auto py-12">

<h1 className="text-2xl font-bold">
Shopping Cart
</h1>

{cart.map(item=>(
<CartItem
key={item._id}
item={item}
/>
))}

<Link to="/checkout">

<button className="bg-green-600 text-white px-6 py-3 mt-6 rounded">

Proceed to Checkout

</button>

</Link>

</div>

)

}