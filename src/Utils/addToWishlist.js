import axios from "axios";

const addToWishlist = async (product,token,wishlistDispatch) => {
      try {
        const response = await axios.post(
          "/api/user/wishlist",
          { product },
          { headers: { authorization: token } }
          );
          if (response.status === 201) {
        wishlistDispatch({
          type: "Add_to_Wishlist",
          payload: response.data.wishlist,
        });
        } else {
          throw new Error();
        }
      } catch (error) {
        console.error(error);
      }
  };

  export {addToWishlist};