const genderFilter = (state,products) =>{
    if(state.gender === "men"){
        return products.filter(item=>item.gender==="men");
    }else if(state.gender === "women"){
        return products.filter(item=>item.gender==="women");
    }
    return products;
}

export {genderFilter};