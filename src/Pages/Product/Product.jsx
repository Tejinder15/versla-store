import Header from "../../Components/Header/Header";
import product from "../../Images/product.png";
// import "./Product.css";
const Product = () => {
    return (
        <>
        <Header />
        <div className="container">
            <aside className="filter-panel">
            <div className="filter-option">
                <h3>Filters</h3>
                <button className="clear-btn">Clear</button>
            </div>
            <div className="price-option">
                <h3>Price</h3>
                <div className="price-value">
                    <span>100</span>
                    <span>150</span>
                    <span>200</span>
                </div>
                <input type="range" name="price_range" step="50"/>
            </div>
            <div className="category-option">
                <h3>Category</h3>
                <div className="input-option">
                    <input type="checkbox" name="men" id="men"/>
                    <label for="men">Men Clothing</label>
                </div>
                <div className="input-option">
                    <input type="checkbox" name="women" id="women"/>
                    <label for="women">women Clothing</label>
                </div>
            </div>
            <div className="rating-option">
                <h3>Rating</h3>
                <div className="input-option">
                    <input type="radio" name="stars" id="4stars"/>
                    <label for="4stars">4 Stars & above</label>
                </div>
                <div className="input-option">
                    <input type="radio" name="stars" id="3stars"/>
                    <label for="3stars">3 Stars & above</label>
                </div>
                <div className="input-option">
                    <input type="radio" name="stars" id="2stars"/>
                    <label for="2stars">2 Stars & above</label>
                </div>
                <div className="input-option">
                    <input type="radio" name="stars" id="1stars"/>
                    <label for="1stars">1 Stars & above</label>
                </div>
            </div>
            <div className="sortby-option">
                <h3>Sort by</h3>
                <div className="input-option">
                    <input type="radio" name="sort" id="low_to_high"/>
                    <label for="low_to_high">Price - Low to High</label>
                </div>
                <div className="input-option">
                    <input type="radio" name="sort" id="high_to_low"/>
                    <label for="high_to_low">Price - High to Low</label>
                </div>
            </div>
        </aside>
        <main>
            <div className="container">
                <div className="wishlist-container products-container">
                    <div className="basic-card">
                        <div className="basic-card-image-title badge-image-title">
                            <div className="product-image-container">
                                <img src={product} alt="photo" className="basic-card-image"/>
                            </div>
                            <span className="dot"><span className="material-icons-outlined ">favorite_border</span></span>
                        </div>
                        <div className="basic-card-details">
                            <div className="basic-card-secondary">
                                <p className="product-title">Men Premium Jacket</p>
                                <h3 className="product-price">&#8377;2000</h3>
                            </div>
                        </div>
                        <div className="basic-card-actions">
                            <button className="move-to-cart">Add to Cart</button>
                        </div>
                    </div>
        
                    <div className="basic-card">
                        <div className="basic-card-image-title badge-image-title">
                            <div className="product-image-container">
                                <img src={product} alt="photo" className="basic-card-image"/>
                            </div>
                            <span className="dot"><span className="material-icons-outlined heart">favorite_border</span></span>
                        </div>
                        <div className="basic-card-details">
                            <div className="basic-card-secondary">
                                <p className="product-title">Men Premium Jacket</p>
                                <h3 className="product-price">&#8377;2000</h3>
                            </div>
                        </div>
                        <div className="basic-card-actions">
                            <button className="move-to-cart">Add to Cart</button>
                        </div>
                    </div>
        
                    <div className="basic-card">
                        <div className="basic-card-image-title badge-image-title">
                            <div className="product-image-container">
                                <img src={product} alt="photo" className="basic-card-image"/>
                            </div>
                            <span className="dot"><span className="material-icons-outlined heart">favorite_border</span></span>
                        </div>
                        <div className="basic-card-details">
                            <div className="basic-card-secondary">
                                <p className="product-title">Men Premium Jacket</p>
                                <h3 className="product-price">&#8377;2000</h3>
                            </div>
                        </div>
                        <div className="basic-card-actions">
                            <button className="move-to-cart">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </div>
        </>
    );
}

export default Product;