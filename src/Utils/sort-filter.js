const sortData = (state,products) => {
    if(state.sort === "low_to_high"){
        return [...products].sort((a,b)=>a.price-b.price);
    }
    if(state.sort === "high_to_low"){
        return [...products].sort((a,b)=> b.price - a.price);
    }
    return products;
};

export {sortData};