import Header from "../../Components/Header/Header";
import Product from "../../Images/product.png";
// import "./Cart.css";
const Cart = () => {
    return(
        <>
        <Header/>
        <div className="container">
            <h2 className="center-text">MY CART</h2>
            <div className="mycart-container">
                <div className="product-card">
                    <div className="basic-card-image-title product-card-image">
                        <img src={Product} alt="photo" className="product-image"/>
                        <span className="material-icons-outlined dot">favorite_border</span>
                    </div>
                    <div className="product-card-container">
                        <div className="product-card-info">
                            <div className="product-card-details">
                                <p className="product-title">Men Premium Jacket</p>
                                <span className="product-price">&#8377;2000</span>
                                <span className="product-discount-price price">&#8377;4000</span>
                                <p className="product-discount">50% off</p>
                                <div className="product-quantity-container">
                                    <span>Quantity:</span>
                                    <div className="product-quantity-handle">
                                        <button className="prod-quantity-decrease">-</button>
                                        <input type="text" autocomplete="off" className="prod-quantity"/>
                                        <button className="prod-quantity-increase">+</button>
                                    </div>
                                </div>
                            </div>
                            <div className="product-card-actions">
                                <button className="prod-rfc">Remove From Cart</button>
                                <button className="prod-mtw">Move to Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="price-details-container">
                    <h2 className="price-detail-heading">Price Details</h2>
                    <hr/>
                    <div className="price-detail-desc">
                        <div className="price-detail-item">
                            <span>Price &#40;2items&#41;</span>
                            <span className="price">&#8377;4000</span>
                        </div>
                        <div className="price-detail-item">
                            <span>Discount</span>
                            <span>- <span className="price">&#8377;1000</span></span>
                        </div>
                        <div className="price-detail-item">
                            <span>Delivery Charges</span>
                            <span className="price">&#8377;499</span>
                        </div>
                    </div>
                    <hr/>
                    <div className="total-amount-container">
                        <span className="total-amount-title">Total Amount</span>
                        <span className="total-amount price">&#8377;3499</span>
                    </div>
                    <hr/>
                    <p>You will save <span className="price">&#8377;1000</span> on this order.</p>
                    <button className="place-order">Place Order</button>
                </div>
            </div>
        </div>
        </>
    );
}
export default Cart;