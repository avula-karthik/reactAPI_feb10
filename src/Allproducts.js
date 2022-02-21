import axios from "axios"
import { useState } from "react";
function Allproducts() {
    let [product, setProduct] = useState([])
    axios.get("https://fakestoreapi.com/products")
        .then((response) => {
            setProduct(response.data)
        })
    return (
        <div>
            <h1>All available products</h1>
            {
                product.map((val, index) => {
                    return (
                        <div className="singleProduct" >
                            <div id="product_id">Id : {val.id} </div>
                            <h1 id="product_title">Title : {val.title}</h1>
                            <h2 id="product_price">Price : {val.price} Rs.</h2>
                            <div id="rating">Rating : {val.rating.rate} /5</div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Allproducts