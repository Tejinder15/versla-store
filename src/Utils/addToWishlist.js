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
          type: "Add_To_Wishlist",
          payload: response.data.wishlist,
        });
        console.log(response);
        } else {
          throw new Error();
        }
      } catch (error) {
        console.error(error);
      }
  };

  export {addToWishlist};