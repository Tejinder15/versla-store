import Header from "../../Components/Header/Header";
import ProductCard from "../../Components/ProductCard/ProductCard";
import product from "../../Images/product.png";

const Wishlist = () =>{
    return (
        <>
        <Header/>
        <div className="container">
            <h2 className="wishlist-head center-text">My Wishlist</h2>
            <div className="wishlist-container">
                <ProductCard image={product}/>
                <ProductCard image={product}/>
                <ProductCard image={product}/>
                <ProductCard image={product}/>
            </div>
        </div>
        </>
    );
}

export  {Wishlist};