const ratingFilter = (state,products) =>{
    if(state.rating === ""){
        return state;
    }
    return products.filter((item)=>Number(item.rating) >= Number(state.rating));
}

export {ratingFilter};