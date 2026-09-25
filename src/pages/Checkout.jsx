export default function Checkout(){

function pay(){

alert("Payment integration coming soon")

}

return(

<div className="max-w-xl mx-auto py-20 text-center">

<h1 className="text-3xl font-bold">
Checkout
</h1>

<button
onClick={pay}
className="bg-green-600 text-white px-8 py-3 mt-8 rounded"
>

Pay Now

</button>

</div>

)

}