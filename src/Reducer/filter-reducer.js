const filterReducer = (state,action) => {
    const {payload} = action;

    switch(action.type){
        case 'PRICE':
            return {...state,price: payload.price};

        case 'RATING':
            return {...state,rating: payload.value};

        case "SORT":
            if(payload.sort === 'low_to_high'){
                return {...state,sort: 'low_to_high'};
            }else{
                return {...state, sort: 'high_to_low'};
            }

        case "GENDER":
            if(payload.gender === "men"){
                return {...state,gender:'men'};
            }
            if(payload.gender === "women"){
                return {...state,gender:'women'};
            }

        case "CLEAR":
            return {...state,price:5000,instock:true,category:[],rating:'',sort:''};

        default:
            throw new Error('Action Not Defined');
    }
};
export {filterReducer};