import { useState } from "react";
import { useAuth } from "../../Context/AuthContext/auth-context";
import { useCart } from "../../Context/CartContext/cart-context";
import { useWishlist } from "../../Context/WishContext/wishlist-context";
import { useNavigate } from "react-router-dom";
const ProductCard = (props) => {
  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();
  const {
    cartState: { cart },
  } = useCart();
  const navigate = useNavigate();
  return (
    <>
      <div className="basic-card">
        <div className="basic-card-image-title badge-image-title">
          <div className="product-image-container">
            <img
              src={props.productDetail.image}
              alt={props.productDetail.title}
              className="basic-card-image productcard_image"
            />
          </div>
          <span className="dot">
            {wishlist.some((item) => item._id === props.productDetail._id) ? (
              <span
                className={"material-icons-outlined heart-filled"}
                onClick={() =>
                  props.removeFromWishlistHandler(props.productDetail._id)
                }
              >
                favorite
              </span>
            ) : (
              <span
                className={"material-icons-outlined"}
                onClick={() => props.addToWishlistHandler(props.productDetail)}
              >
                favorite_border
              </span>
            )}
          </span>
        </div>
        <div className="basic-card-details">
          <div className="basic-card-secondary">
            <p className="product-title center-text">
              {props.productDetail.title}
            </p>
            <h3 className="product-price center-text">
              &#8377;{props.productDetail.price}
            </h3>
          </div>
        </div>
        <div className="basic-card-actions">
          {cart.some((item) => item._id === props.productDetail._id) ? (
            <button className="move-to-cart" onClick={() => navigate("/cart")}>
              Go to Cart
            </button>
          ) : (
            <button
              className="move-to-cart"
              onClick={() => props.addToCart(props.productDetail)}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
