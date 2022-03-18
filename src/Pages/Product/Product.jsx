import Filter from "../../Components/Filter/Filter";
import Header from "../../Components/Header/Header";
import ProductCard from "../../Components/ProductCard/ProductCard";
import product from "../../Images/product.png";
import styles from "./Product.module.css";
const Product = () => {
    return (
        <>
        <Header />
        <div className="container">
            <Filter />
        <main>
            <div className={`wishlist-container ${styles.products_container}`}>
                <ProductCard image={product}/>
                <ProductCard image={product}/>
                <ProductCard image={product}/>
            </div>
        </main>
        </div>
        </>
    );
}

export  {Product};