const instockFilter = (state,products)=>{
    if(state.instock){
        return products.filter(item=>item.instock===true);
    }
    return state;
}

export {instockFilter};