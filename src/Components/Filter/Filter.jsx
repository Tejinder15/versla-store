import { useSearchParams } from "react-router-dom";
import styles from "./Filter.module.css";
import InputOption from "./InputOption/InputOption";
import PricePoints from "./PricePoints/PricePoints";

const Filter = () => {

    const [searchParams,setSearchParams] = useSearchParams();
    const queryCategory = searchParams.get('category');
    return(
        <aside className={styles.filter_panel}>
            <div className={styles.filter_option}>
                <h3>Filters</h3>
                <button className={styles.clear_btn}>Clear</button>
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
                <input type="range" name="price_range" step={1000} min={1000} max={5000}/>
            </div>
            <div className="category-option">
                <h3>Category</h3>
                <InputOption type="checkbox" name="men" id="men" title="Men Clothing" checked={queryCategory==="men"?"Checked":""}/>
                <InputOption type="checkbox" name="women" id="women" title="Women Clothing" checked={queryCategory==="women"?"Checked":""}/>
            </div>
            <div className="rating-option">
                <h3>Rating</h3>
                <InputOption type="radio" name="stars" id="4stars" title="4 Stars &#38; above"/>
                <InputOption type="radio" name="stars" id="3stars" title="3 Stars &#38; above"/>
                <InputOption type="radio" name="stars" id="2stars" title="2 Stars &#38; above"/>
                <InputOption type="radio" name="stars" id="1stars" title="1 Stars &#38; above"/>
            </div>
            <div className="sortby-option">
                <h3>Sort by</h3>
                <InputOption type="radio" name="sort" id="low_to_high" title="Price - Low to High"/>
                <InputOption type="radio" name="sort" id="high_to_low" title="Price - High to Low"/>
            </div>
        </aside>
    );
}

export default Filter;