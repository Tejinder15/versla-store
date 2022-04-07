import axios from "axios";
import { useEffect } from "react";
import Header from "../../Components/Header/Header";
import WishCard from "../../Components/WishCard/WishCard";
import { useAuth } from "../../Context/AuthContext/auth-context";
import { useCart } from "../../Context/CartContext/cart-context";
import { useWishlist } from "../../Context/WishContext/wishlist-context";
import { removeFromWishlist, addToCart } from "../../Utils";

const Wishlist = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();
  const { authState } = useAuth();
  const { token } = authState;
  const { wishlist } = wishlistState;

  const getWishlistItems = async () => {
    try {
      const response = await axios.get("/api/user/wishlist", {
        headers: { authorization: token },
      });
      wishlistDispatch({
        type: "Get_Wishlist",
        payload: response.data.wishlist,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const removeFromWishlistHandler = async (itemid) => {
    removeFromWishlist(itemid, token, wishlistDispatch);
  };

  const addToCartHandler = (product) => {
    addToCart(product, token, cartDispatch);
  };

  useEffect(() => getWishlistItems(), []);
  return (
    <>
      <Header />
      <div className="container">
        <h2 className="wishlist-head center-text">My Wishlist</h2>
        <div className="wishlist-container">
          {wishlist.length !== 0 ? (
            wishlist.map((item) => (
              <WishCard
                key={item._id}
                addToCartH={addToCartHandler}
                productDetail={item}
                WishDel={removeFromWishlistHandler}
              />
            ))
          ) : (
            <h2 className="center-text">Wishlist is Empty 😥.</h2>
          )}
        </div>
      </div>
    </>
  );
};

export { Wishlist };
