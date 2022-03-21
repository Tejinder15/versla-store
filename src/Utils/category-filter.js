const categoryFilter = (state,products) => {
    const selectedCategories = products.filter((item)=>state.category.includes(item.categoryName));
    if(selectedCategories.length<=0){
        return products;
    }
    return selectedCategories;
};

export {categoryFilter};