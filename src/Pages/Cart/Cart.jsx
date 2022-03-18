import CartProduct from "../../Components/CartProduct/CartProduct";
import Header from "../../Components/Header/Header";
import PriceCard from "../../Components/PriceCard/PriceCard";
import Product from "../../Images/product.png";
import styles from "./Cart.module.css";
const Cart = () => {
    return(
        <>
        <Header/>
        <div className="container">
            <h2 className="center-text">MY CART</h2>
            <div className={styles.mycart_container}>
                <CartProduct image={Product}/>
                <PriceCard/>
            </div>
        </div>
        </>
    );
}
export {Cart};