import axios from "axios"
import { useState } from "react";
function Allproducts() {
    let [product, setProduct] = useState([])
    axios.get("https://fakestoreapi.com/products")
        .then((response) => {
            setProduct(response.data)
            product.map((val, index) => {
                return (
                    <div className="singleProduct">
                        <p id="product_id">{val.id}</p>
                        <p id="product_price"> {val.price} </p>
                        <p id="product_description"> {val.description} </p>

                    </div>
                )
            })

        })
    return (
        <div>
            <h1>Data Fetching...please wait</h1>
        </div>
    )
}
export default Allproducts