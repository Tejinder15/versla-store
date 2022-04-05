import axios from "axios";

const removeFromCart = async (itemid,token,cartDispatch) => {
try {
      const response = await axios.delete(`/api/user/cart/${itemid}`, {
        headers: { authorization: token },
      });
      if (response.status === 200) {
        cartDispatch({ type: "Remove_from_cart", payload: response.data.cart });
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
};

export {removeFromCart};