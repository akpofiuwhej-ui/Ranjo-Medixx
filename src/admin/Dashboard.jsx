import {Link} from "react-router-dom"

export default function Dashboard(){

return(

<div className="max-w-6xl mx-auto py-12">

<h1 className="text-3xl font-bold">
Admin Dashboard
</h1>

<div className="grid grid-cols-3 gap-6 mt-10">

<Link
to="/admin/add-product"
className="bg-white shadow p-6 rounded"
>

Add Product

</Link>

<div className="bg-white shadow p-6 rounded">
Orders
</div>

<div className="bg-white shadow p-6 rounded">
Revenue
</div>

</div>

</div>

)

}