import { useState } from "react";
import { useWishlist } from "../../Context/WishContext/wishlist-context";
const ProductCard = (props) => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlist } = wishlistState;
  const checkInWishlist = (id) => {
    const item = wishlist.find((item) => item._id === id);
    return item ? true : false;
  };
  const [isinWishlist, setIsInWishlist] = useState(
    checkInWishlist(props.productId)
  );
  return (
    <>
      <div className="basic-card">
        <div className="basic-card-image-title badge-image-title">
          <div className="product-image-container">
            <img
              src={props.productImg}
              alt={props.productTitle}
              className="basic-card-image productcard_image"
            />
          </div>
          <span className="dot">
            <span
              className={`material-icons-outlined ${
                isinWishlist && "heart-filled"
              }`}
              onClick={() => {
                return isinWishlist
                  ? props.removeFromWishlist(props.productId, setIsInWishlist)
                  : props.addToWishlistHandler(
                      props.productId,
                      setIsInWishlist
                    );
              }}
            >
              {isinWishlist ? "favorite" : "favorite_border"}
            </span>
          </span>
        </div>
        <div className="basic-card-details">
          <div className="basic-card-secondary">
            <p className="product-title center-text">{props.productTitle}</p>
            <h3 className="product-price center-text">
              &#8377;{props.productPrice}
            </h3>
          </div>
        </div>
        <div className="basic-card-actions">
          <button
            className="move-to-cart"
            onClick={() => props.addToCart(props.productId)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
