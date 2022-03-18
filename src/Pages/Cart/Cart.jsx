import Header from "../../Components/Header/Header";
import Product from "../../Images/product.png";
import styles from "./Cart.module.css";
const Cart = () => {
    return(
        <>
        <Header/>
        <div className="container">
            <h2 className="center-text">MY CART</h2>
            <div className={styles.mycart_container}>
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
                                <p className={styles.product_discount}>50% off</p>
                                <div className="product-quantity-container">
                                    <span>Quantity:</span>
                                    <div className="product-quantity-handle">
                                        <button className="prod-quantity-decrease">-</button>
                                        <input type="text" autoComplete="off" className="prod-quantity"/>
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

                <div className={styles.price_details_container}>
                    <h2 className="price-detail-heading">Price Details</h2>
                    <hr/>
                    <div className="price-detail-desc">
                        <div className={styles.price_detail_item}>
                            <span>Price &#40;2items&#41;</span>
                            <span className={styles.price}>&#8377;4000</span>
                        </div>
                        <div className={styles.price_detail_item}>
                            <span>Discount</span>
                            <span>- <span className={styles.price}>&#8377;1000</span></span>
                        </div>
                        <div className={styles.price_detail_item}>
                            <span>Delivery Charges</span>
                            <span className={styles.price}>&#8377;499</span>
                        </div>
                    </div>
                    <hr/>
                    <div className={styles.total_amount_container}>
                        <span className={styles.total_amount_title}>Total Amount</span>
                        <span className={`${styles.total_amount} ${styles.price}`}>&#8377;3499</span>
                    </div>
                    <hr/>
                    <p>You will save <span className={styles.price}>&#8377;1000</span> on this order.</p>
                    <button className={styles.place_order}>Place Order</button>
                </div>
            </div>
        </div>
        </>
    );
}
export {Cart};