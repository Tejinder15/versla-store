import {createContext,useContext,useReducer} from 'react';

import { filterReducer } from '../../Reducer/filter-reducer';

const FilterContext = createContext(null);

const FilterProvider = ({children}) => {
    const [state,dispatch] = useReducer(filterReducer,{
        price: 5000,
        instock: true,
        gender: '',
        category: [],
        rating: '',
        sort: ''
    });

    return(
        <FilterContext.Provider value={{state,dispatch}}>
            {children}
        </FilterContext.Provider>
    );
};

const useFilter = () => useContext(FilterContext);

export {FilterProvider, useFilter};