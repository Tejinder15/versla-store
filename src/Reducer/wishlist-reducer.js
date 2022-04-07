const wishlistReducer = (state,action) => {
    switch(action.type){
        case "Get_Wishlist":
            return {...state,wishlist:action.payload};
        case "Add_to_Wishlist":
            return {...state,wishlist:action.payload};
        case "Remove_from_Wishlist":
            return {...state,wishlist:action.payload};
        default:
            return state;
    }
}

export  {wishlistReducer};