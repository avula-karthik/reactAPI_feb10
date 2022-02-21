import axios from "axios";
import propTypes from "prop-types";
const Product = (props) => {
    axios.get(`https://fakestoreapi.com/products/${props.num}`)
        .then((response) => {
            console.log(response.data.id);
            document.getElementById("product_id").textContent = `Id : ${response.data.id}`;
            document.getElementById("product_title").textContent = `${response.data.title}`
            document.getElementById("product_price").textContent = `Price : ${response.data.price} Rs.`
            document.getElementById("product_description").textContent = `${response.data.description}`
            document.getElementById("product_category").textContent = `Category :${response.data.category}`
            document.getElementById("product_img").src = `${response.data.image}`
            document.getElementById("rating").textContent = `Average User Rating : ${response.data.rating.rate} / 5`
            document.getElementById("count").textContent = `Buyers count: ${response.data.rating.count}`


        })
    return (
        <div className="singleProduct">
            <h1>Welcome to single product cart</h1>
            <div id="product_id"> </div>
            <h1 id="product_title"></h1>
            <h3 id="product_description"></h3>
            <div id="product_category"></div>
            <img id="product_img"></img>
            <h2 id="product_price"></h2>
            <marquee>
                <strong>
                    <div id="rating"></div>
                    <div id="count"></div></strong>
            </marquee>

        </div>
    )
}
export default Product;