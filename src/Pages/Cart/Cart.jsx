import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import PriceCard from "../../Components/PriceCard/PriceCard";
import { useAuth } from "../../Context/AuthContext/auth-context";
import { useCart } from "../../Context/CartContext/cart-context";
import {
  cartBill,
  increaseUpdate,
  removeFromCart,
  decreaseUpdate,
} from "../../Utils";
import styles from "./Cart.module.css";
const Cart = () => {
  const { cartState, cartDispatch } = useCart();
  const { authState } = useAuth();
  const { token } = authState;
  const { cart } = cartState;
  const { cartQuantity, itemsPrice, totalPrice } = cartBill(cart);

  const getCartItems = async () => {
    try {
      const response = await axios.get("/api/user/cart", {
        headers: { authorization: token },
      });
      if (response.status === 200) {
        cartDispatch({ type: "Get_Cart", payload: response.data.cart });
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromCartHandler = async (itemid) => {
    removeFromCart(itemid, token, cartDispatch);
  };

  useEffect(() => getCartItems(), []);

  const increaseQuantityHandler = (itemid) => {
    increaseUpdate(itemid, token, cartDispatch);
  };

  const decreaseQuantityHandler = (itemid) => {
    decreaseUpdate(itemid, token, cartDispatch);
  };
  return (
    <>
      <Header />
      <div className="container">
        <h2 className="center-text">MY CART</h2>
        <div className={styles.mycart_container}>
          <div className={styles.item_container}>
            {cart.length !== 0 ? (
              cart.map((item) => (
                <div className={`product-card ${styles.prod}`} key={item._id}>
                  <div className="basic-card-image-title product-card-image">
                    <img
                      src={item.image}
                      alt="photo"
                      className="product-image"
                    />
                    <span className="material-icons-outlined dot">
                      favorite_border
                    </span>
                  </div>
                  <div className="product-card-container">
                    <div className="product-card-info">
                      <div className="product-card-details">
                        <p className="product-title">{item.title}</p>
                        <span className="product-price">
                          &#8377;{item.price}
                        </span>
                        <span className="product-discount-price price">
                          &#8377;{item.price * 2}
                        </span>
                        <p className="gray-text">50% off</p>
                        <div className="product-quantity-container">
                          <span>Quantity:</span>
                          <div className="product-quantity-handle">
                            <button
                              className="prod-quantity-decrease"
                              onClick={() =>
                                cartQuantity <= 1
                                  ? removeFromCartHandler(item._id)
                                  : decreaseQuantityHandler(item._id)
                              }
                            >
                              -
                            </button>
                            <input
                              type="text"
                              autoComplete="off"
                              className="prod-quantity"
                              value={item.qty}
                              readOnly
                            />
                            <button
                              className="prod-quantity-increase"
                              onClick={() => increaseQuantityHandler(item._id)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="product-card-actions">
                        <button
                          className="prod-rfc"
                          onClick={() => removeFromCartHandler(item._id)}
                        >
                          Remove From Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h2 className="center-text">Cart is Empty 🥶.</h2>
            )}
          </div>
          <div className={styles.pricecard_container}>
            {cart.length !== 0 ? (
              <PriceCard
                totalp={totalPrice}
                itemsPrice={itemsPrice}
                noofitems={cart.length}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export { Cart };
