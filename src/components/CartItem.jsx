import {useContext} from "react"
import {CartContext} from "../context/CartContext"

export default function CartItem({item}){

const {removeFromCart} = useContext(CartContext)

return(

<div className="flex justify-between border p-3 mt-3">

<div>

<h2>{item.name}</h2>
<p>₦{item.price}</p>

</div>

<button
onClick={()=>removeFromCart(item._id)}
className="text-red-600"
>

Remove

</button>

</div>

)

}