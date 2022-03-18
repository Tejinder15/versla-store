import Header from "../../Components/Header/Header";
import product from "../../Images/product.png";

const Wishlist = () =>{
    return (
        <>
        <Header/>
        <div className="container">
            <h2 className="wishlist-head center-text">My Wishlist</h2>
            <div className="wishlist-container">
                <div className="basic-card">
                    <div className="basic-card-image-title badge-image-title">
                        <div className="product-image-container">
                            <img src={product}
                                alt="photo" className="basic-card-image"/>
                        </div>
                        <span className="dot"><span className="material-icons-outlined heart">favorite_border</span></span>
                    </div>
                    <div className="basic-card-details">
                        <div className="basic-card-secondary">
                            <p className="product-title center-text">Men Premium Jacket</p>
                            <h3 className="product-price center-text">&#8377;2000</h3>
                        </div>
                    </div>
                    <div className="basic-card-actions">
                        <button className="move-to-cart">Move to Cart</button>
                    </div>
                </div>

                <div className="basic-card">
                    <div className="basic-card-image-title badge-image-title">
                        <div className="product-image-container">
                            <img src={product}
                                alt="photo" className="basic-card-image"/>
                        </div>
                        <span className="dot"><span className="material-icons-outlined heart">favorite_border</span></span>
                    </div>
                    <div className="basic-card-details">
                        <div className="basic-card-secondary">
                            <p className="product-title center-text">Men Premium Jacket</p>
                            <h3 className="product-price center-text">&#8377;2000</h3>
                        </div>
                    </div>
                    <div className="basic-card-actions">
                        <button className="move-to-cart">Move to Cart</button>
                    </div>
                </div>

                <div className="basic-card">
                    <div className="basic-card-image-title badge-image-title">
                        <div className="product-image-container">
                            <img src={product}
                                alt="photo" className="basic-card-image"/>
                        </div>
                        <span className="dot"><span className="material-icons-outlined heart">favorite_border</span></span>
                    </div>
                    <div className="basic-card-details">
                        <div className="basic-card-secondary">
                            <p className="product-title center-text">Men Premium Jacket</p>
                            <h3 className="product-price center-text">&#8377;2000</h3>
                        </div>
                    </div>
                    <div className="basic-card-actions">
                        <button className="move-to-cart">Move to Cart</button>
                    </div>
                </div>

                <div className="basic-card">
                    <div className="basic-card-image-title badge-image-title">
                        <div className="product-image-container">
                            <img src={product}
                                alt="photo" className="basic-card-image"/>
                        </div>
                        <span className="dot"><span className="material-icons-outlined heart">favorite_border</span></span>
                    </div>
                    <div className="basic-card-details">
                        <div className="basic-card-secondary">
                            <p className="product-title center-text">Men Premium Jacket</p>
                            <h3 className="product-price center-text">&#8377;2000</h3>
                        </div>
                    </div>
                    <div className="basic-card-actions">
                        <button className="move-to-cart">Move to Cart</button>
                    </div>
                </div>

                <div className="basic-card">
                    <div className="basic-card-image-title badge-image-title">
                        <div className="product-image-container">
                            <img src={product}
                                alt="photo" className="basic-card-image"/>
                        </div>
                        <span className="dot"><span className="material-icons-outlined heart">favorite_border</span></span>
                    </div>
                    <div className="basic-card-details">
                        <div className="basic-card-secondary">
                            <p className="product-title center-text">Men Premium Jacket</p>
                            <h3 className="product-price center-text">&#8377;2000</h3>
                        </div>
                    </div>
                    <div className="basic-card-actions">
                        <button className="move-to-cart">Move to Cart</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export  {Wishlist};