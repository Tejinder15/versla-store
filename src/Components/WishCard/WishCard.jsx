import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/CartContext/cart-context";
const WishCard = (props) => {
  const {
    cartState: { cart },
    cartDispatch,
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
              className="basic-card-image"
            />
          </div>
          <span className="dot heart-filled">
            <span
              className="material-icons-outlined"
              onClick={() => props.WishDel(props.productDetail._id)}
            >
              favorite
            </span>
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
              onClick={() => props.addToCartH(props.productDetail)}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default WishCard;
