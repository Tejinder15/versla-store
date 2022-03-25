import axios from "axios";
import { useEffect } from "react";
import Header from "../../Components/Header/Header";
import WishCard from "../../Components/WishCard/WishCard";
import { useAuth } from "../../Context/AuthContext/auth-context";
import { useWishlist } from "../../Context/WishContext/wishlist-context";

const Wishlist = () =>{
    const {wishlistState,wishlistDispatch} = useWishlist();
    const {authState} = useAuth();
    const {token} = authState;
    const {wishlist} = wishlistState;

    const getWishlistItems = async (token,wishlistDispatch) => {
        try{
            const response = await axios.get("/api/user/wishlist",{headers:{authorization:token}});
            if(response.status === 200){
                wishlistDispatch({type:"Get_Wishlist",payload:response.data.wishlist});
            }else{
                throw new Error();
            }
        }catch(error){
            console.error(error);
        }
    }
    const removeFromWishlist = async (itemid) => {
        try {
            const response = await axios.delete(`/api/user/wishlist/${itemid}`,{headers:{authorization:token}});
            if(response.status === 200){
                wishlistDispatch({type:"Remove_from_Wishlist",payload:response.data.wishlist});
            }else{
                throw new Error();
            }
        }catch (error){
            console.error(error);
        }
    }

    useEffect(()=> {
        getWishlistItems(token,wishlistDispatch);
    },[]);
    return (
        <>
        <Header/>
        <div className="container">
            <h2 className="wishlist-head center-text">My Wishlist</h2>
            <div className="wishlist-container">
                {
                    wishlist.length !== 0 ? (
                            wishlist.map(item => (
                                <WishCard key={item._id} productImg={item.image} productTitle={item.title} productPrice={item.price} productId={item._id} WishDel={removeFromWishlist}/>
                            ))
                    ):(
                        <h2 className="center-text">Wishlist is Empty ☹.</h2>
                    )
                }
            </div>
        </div>
        </>
    );
}

export  {Wishlist};