import { useSearchParams } from "react-router-dom";
import { useFilter } from "../../Context/FilterContext/filter-context";
import styles from "./Filter.module.css";
import GenderFilter from "./GenderFilter/GenderFilter";
import PricePoints from "./PricePoints/PricePoints";

const Filter = () => {
    const {state,dispatch} = useFilter();
    const [searchParams,setSearchParams] = useSearchParams();
    const queryGender = searchParams.get('gender');
    return(
        <aside className={styles.filter_panel}>
            <div className={styles.filter_option}>
                <h3>Filters</h3>
                <button className={styles.clear_btn} onClick={()=>dispatch({type:'CLEAR'})}>Clear</button>
            </div>
            <div className="price-option">
                <h3>Price</h3>
                <div className={styles.price_value}>
                    <PricePoints point="1k"/>
                    <PricePoints point="2k"/>
                    <PricePoints point="3k"/>
                    <PricePoints point="4k"/>
                    <PricePoints point="5k"/>
                </div>
                <input type="range" name="price_range" step={1000} min={1000} max={5000} value={state.price} id="price" onChange={(e)=>dispatch({type:"PRICE",payload:{price:e.target.value}})}/>
            </div>
            <div className="category-option">
                <h3>For</h3>
                <GenderFilter name="Men" id="men" usercheck={(queryGender==="men"?true:false)||(state.gender.includes('men'))} handler={(e)=>dispatch({type:'GENDER',payload:{gender:'men',isChecked:e.target.checked}})}/>
                <GenderFilter name="Women" id="women" usercheck={(queryGender==="women"?true:false)||(state.gender.includes('women'))} handler={(e)=>dispatch({type:'GENDER',payload:{gender:'women',isChecked:e.target.checked}})}/>
            </div>
            <div>
                <h3>Category</h3>
                <div className="input-option">
                    <input type="checkbox" id="tshirt"/>
                    <label htmlFor="tshirt">T-Shirt</label>
                </div>
                <div className="input-option">
                    <input type="checkbox" id="blouse"/>
                    <label htmlFor="blouse">Blouse</label>
                </div>
                <div className="input-option">
                    <input type="checkbox" id="dress"/>
                    <label htmlFor="dress">Dress</label>
                </div>
                <div className="input-option">
                    <input type="checkbox" id="doodies"/>
                    <label htmlFor="hoodies">Hoodie</label>
                </div>
                <div className="input-option">
                    <input type="checkbox" id="sweatshirt"/>
                    <label htmlFor="sweatshirt">Sweatshirt</label>
                </div>
                <div className="input-option">
                    <input type="checkbox" id="jeans"/>
                    <label htmlFor="jeans">Jeans</label>
                </div>
                <div className="input-option">
                    <input type="checkbox" id="joggers"/>
                    <label htmlFor="joggers">Joggers</label>
                </div>
                <div className="input-option">
                    <input type="checkbox" id="shorts"/>
                    <label htmlFor="shorts">Shorts</label>
                </div>
                <div className="input-option">
                    <input type="checkbox" id="shirts"/>
                    <label htmlFor="shirts">Shirts</label>
                </div>
            </div>
            <div className="rating-option">
                <h3>Rating</h3>
                <div className="input-option">
                    <input type="radio" name="stars" id="4stars" checked={state.rating === 4} onChange={()=>dispatch({type:'RATING',payload:{value:4}})}/>
                    <label htmlFor="4stars">4 Stars &#38; above</label>
                </div>
                <div className="input-option">
                    <input type="radio" name="stars" id="3stars" checked={state.rating === 3} onChange={()=>dispatch({type:'RATING',payload:{value:3}})}/>
                    <label htmlFor="3stars">3 Stars &#38; above</label>
                </div>
                <div className="input-option">
                    <input type="radio" name="stars" id="2stars" checked={state.rating === 2} onChange={()=>dispatch({type:'RATING',payload:{value:2}})}/>
                    <label htmlFor="2stars">2 Stars &#38; above</label>
                </div>
                <div className="input-option">
                    <input type="radio" name="stars" id="1stars" checked={state.rating === 1} onChange={()=>dispatch({type:'RATING',payload:{value:1}})}/>
                    <label htmlFor="1stars">1 Stars &#38; above</label>
                </div>
            </div>
            <div className="sortby-option">
                <h3>Sort by</h3>
                <div className="input-option">
                    <input type="radio" name="sort" id="low_to_high" checked={state.sort === 'low_to_high'} onChange={()=>dispatch({type:'SORT',payload:{sort:'low_to_high'}})}/>
                    <label htmlFor="low_to_high">Price - Low To High</label>
                </div>
                <div className="input-option">
                    <input type="radio" name="sort" id="high_to_low" checked={state.sort === 'high_to_low'} onChange={()=>dispatch({type:'SORT',payload:{sort:'high_to_low'}})}/>
                    <label htmlFor="high_to_low">Price - High To Low</label>
                </div>
            </div>
        </aside>
    );
}

export default Filter;