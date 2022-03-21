const priceFilter = (state,products) => {
    return products.filter((item)=>Number(item.price)<=Number(state.price));
}

export {priceFilter};