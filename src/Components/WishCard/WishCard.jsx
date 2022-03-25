const WishCard = (props) => {
    return(
        <>
        <div className="basic-card">
            <div className="basic-card-image-title badge-image-title">
                <div className="product-image-container">
                    <img src={props.productImg} alt={props.productTitle} className="basic-card-image"/>
                </div>
                    <span className="dot heart-filled"><span className="material-icons-outlined" onClick={()=>props.WishDel(props.productId)}>favorite</span></span>
            </div>
            <div className="basic-card-details">
                <div className="basic-card-secondary">
                    <p className="product-title center-text">{props.productTitle}</p>
                    <h3 className="product-price center-text">&#8377;{props.productPrice}</h3>
                </div>
            </div>
            <div className="basic-card-actions">
                <button className="move-to-cart">Add to Cart</button>
            </div>
        </div>
        </>
    );
}

export default WishCard;