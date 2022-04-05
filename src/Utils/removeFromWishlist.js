import axios from "axios";

const removeFromWishlist = async (itemid,token,wishlistDispatch,setIsInWishlist) => {
try {
      const response = await axios.delete(`/api/user/wishlist/${itemid}`, {
        headers: { authorization: token },
      });
      if (response.status === 200) {
        wishlistDispatch({
          type: "Remove_from_Wishlist",
          payload: response.data.wishlist,
        });
        setIsInWishlist(false);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
};

export {removeFromWishlist};