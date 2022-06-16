import { useAuth } from "../../Context/AuthContext/auth-context";
import { useCart } from "../../Context/CartContext/cart-context";
import { useWishlist } from "../../Context/WishContext/wishlist-context";
import { useNavigate } from "react-router-dom";
const ProductCard = (props) => {
  const {
    authState: { token },
  } = useAuth();
  const {
    wishlistState: { wishlist },
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
                onClick={() => {
                  token
                    ? props.addToWishlistHandler(props.productDetail)
                    : navigate("/login");
                }}
              >
                favorite_border
              </span>
            )}
          </span>
        </div>
        <div className="basic-card-details">
          <div className="basic-card-secondary">
            <p className="product-title">{props.productDetail.title}</p>
            <div className="product-price-rating">
              <div className={styles.product_price_container}>
                <span className="product-price">
                  &#8377;{props.productDetail.price}
                </span>
              </div>
              <div className="read_only_rating read-only-rating">
                <span className="small">{props.productDetail.rating}</span>
                <span className="material-icons-round">star_border</span>
              </div>
            </div>
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
              onClick={() => {
                token
                  ? props.addToCart(props.productDetail)
                  : navigate("/login");
              }}
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
