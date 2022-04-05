import axios from "axios";

const increaseUpdate = async (itemid,token,cartDispatch) => {
    try {
      const response = await axios.post(`/api/user/cart/${itemid}`,{action:{type:"increment"}}, {
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

export {increaseUpdate};