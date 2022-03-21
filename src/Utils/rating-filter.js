const ratingFilter = (state,products) =>{
    if(state.rating){
        return products.filter((item)=>Number(item.rating) >= Number(state.rating));
    } else{
        return products;
    }
}

export {ratingFilter};