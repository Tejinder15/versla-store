import axios from "axios";

const decreaseUpdate = async (itemid,token,cartDispatch) => {
    try {
      const response = await axios.post(`/api/user/cart/${itemid}`,{action:{type:"decrement"}}, {
        headers: { authorization: token },
      });
      if (response.status === 200) {
        cartDispatch({ type: "Update_cart", payload: response.data.cart });
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
};

export {decreaseUpdate};