import axios from "axios";

const addToCart = async (product,token,cartDispatch) => {
    try {
        const response = await axios.post(
          "/api/user/cart",
          { product },
          { headers: { authorization: token } }
        );
        if (response.status === 201) {
          cartDispatch({ type: "Add_to_cart", payload: response.data.cart });
        } else {
          throw new Error();
        }
      } catch (error) {
        console.error(error);
      }
};

export {addToCart};