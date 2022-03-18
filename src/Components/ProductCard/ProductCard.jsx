const ProductCard = ({image}) => {
    return(
        <>
        <div className="basic-card">
            <div className="basic-card-image-title badge-image-title">
                <div className="product-image-container">
                    <img src={image} alt="photo" className="basic-card-image"/>
                </div>
                <span className="dot"><span className="material-icons-outlined ">favorite_border</span></span>
            </div>
            <div className="basic-card-details">
                <div className="basic-card-secondary">
                    <p className="product-title center-text">Men Premium Jacket</p>
                    <h3 className="product-price center-text">&#8377;2000</h3>
                </div>
            </div>
            <div className="basic-card-actions">
                <button className="move-to-cart">Add to Cart</button>
            </div>
        </div>
        </>
    );
}

export default ProductCard;