const filterReducer = (state,action) => {
    const {payload} = action;

    switch(action.type){
        case 'PRICE':
            return {...state,price: payload.price};

        case 'RATING':
            return {...state,rating: payload.rating};

        case "SORT":
            if(payload.sort === 'low_to_high'){
                return {...state,sort: 'low_to_high'};
            }else{
                return {...state, sort: 'high_to_low'};
            }

        case 'CATEGORY':
            if(!state.category.includes(payload.category)){
                return {...state,category:[...state.category,payload.category]};
            }else{
                const removeCategory = state.category.find((category)=>category===payload.category);
                const newCategory = state.category.filter((category)=>category!==removeCategory);
                return{...state,category:newCategory};
            }

        case "GENDER":
            if(payload.gender === "men"){
                return {...state,gender:'men'};
            }
            if(payload.gender === "women"){
                return {...state,gender:'women'};
            }

        case "CLEAR":
            return {...state,price:5000,gender:'',instock:true,category:[],rating:'',sort:''};

        default:
            throw new Error('Action Not Defined');
    }
};
export {filterReducer};