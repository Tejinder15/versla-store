const cartReducer = (state,action) => {
    switch(action.type){
        case "Get_Cart":
            return {...state,cart:action.payload};
        case "Add_to_cart":
            return {...state,cart:action.payload};
        case "Remove_from_cart":
            return {...state,cart:action.payload};
        default:
            return state;
    }
}

export {cartReducer};