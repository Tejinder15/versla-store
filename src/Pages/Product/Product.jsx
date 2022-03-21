import {useState,useEffect} from "react";
import axios from "axios";
import Filter from "../../Components/Filter/Filter";
import Header from "../../Components/Header/Header";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useFilter } from "../../Context/FilterContext/filter-context";
import { sortData,priceFilter,ratingFilter,instockFilter, categoryFilter, genderFilter } from "../../Utils";
import styles from "./Product.module.css";
const Product = () => {
    const {state} = useFilter();
    const [products,setProducts] = useState([]);

    const loadProducts = async () =>{
        try{
            const response = await axios.get("/api/products");
            setProducts(response.data.products);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>loadProducts(),[]);
    const stockData = instockFilter(state,products);
    const genderData = genderFilter(state,stockData);
    const categoryData = categoryFilter(state,genderData);
    const ratingData = ratingFilter(state,categoryData);
    const priceFilteredData = priceFilter(state,ratingData);
    const sortedData = sortData(state,priceFilteredData);
    return (
        <>
        <Header />
        <div className="container">
            <Filter />
        <main>
            <div className={`wishlist-container ${styles.products_container}`}>
                {sortedData.length > 0?(
                sortedData.map(item=>(
                    <ProductCard productImg={item.image} productTitle={item.title} productPrice={item.price} key={item._id}/>
                ))):(
                    <h2>No Products Found</h2>
                )}
            </div>
        </main>
        </div>
        </>
    );
}

export  {Product};