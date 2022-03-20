import {useState,useEffect} from "react";
import axios from "axios";
import Filter from "../../Components/Filter/Filter";
import Header from "../../Components/Header/Header";
import ProductCard from "../../Components/ProductCard/ProductCard";
import styles from "./Product.module.css";
const Product = () => {
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
    return (
        <>
        <Header />
        <div className="container">
            <Filter />
        <main>
            <div className={`wishlist-container ${styles.products_container}`}>
                {products.map(item=>(
                    <ProductCard productImg={item.image} productTitle={item.title} productPrice={item.price} key={item._id}/>
                ))}
            </div>
        </main>
        </div>
        </>
    );
}

export  {Product};