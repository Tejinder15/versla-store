const CartProduct = ({image}) => {
    return(
        <div className="product-card">
            <div className="basic-card-image-title product-card-image">
                <img src={image} alt="photo" className="product-image"/>
                <span className="material-icons-outlined dot">favorite_border</span>
            </div>
            <div className="product-card-container">
                <div className="product-card-info">
                    <div className="product-card-details">
                        <p className="product-title">Men Premium Jacket</p>
                        <span className="product-price">&#8377;2000</span>
                        <span className="product-discount-price price">&#8377;4000</span>
                        <p className="gray-text">50% off</p>
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
    );
}

export default CartProduct;