import {useState} from "react"
import api from "../services/api"

export default function AddProduct(){

const [product] = useState({
name:"",
price:"",  
description:""
})

function submit(e){

e.preventDefault()

api.post("/products/add",product)

alert("Product added")

}

return(

<form
onSubmit={submit}
className="max-w-xl mx-auto py-12"
>

<input
placeholder="Product Name"
className="border p-3 w-full"
/>

<input
placeholder="Price"
className="border p-3 w-full mt-3"
/>

<textarea
placeholder="Description"
className="border p-3 w-full mt-3"
/>

<button
className="bg-blue-700 text-white px-6 py-3 mt-4"
>

Add Product

</button>

</form>

)

}