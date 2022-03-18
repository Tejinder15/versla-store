import Price from "./Price/Price";
import styles from "./PriceCard.module.css";
const PriceCard = () => {
    return (
        <div className={styles.price_details_container}>
            <h2 className="price-detail-heading">Price Details</h2>
            <hr/>
            <div className="price-detail-desc">
                <div className={styles.price_detail_item}>
                    <span>Price &#40;2items&#41;</span>
                    <Price amount={4000}/>
                </div>
                <div className={styles.price_detail_item}>
                    <span>Discount</span>
                    <span>- <Price amount={1000}/></span>
                </div>
                <div className={styles.price_detail_item}>
                    <span>Delivery Charges</span>
                    <Price amount={499}/>
                </div>
            </div>
            <hr/>
            <div className={styles.total_amount_container}>
                <span className={styles.total_amount_title}>Total Amount</span>
                <span className={`${styles.total_amount} price`}>&#8377;3499</span>
            </div>
            <hr/>
            <p>You will save <Price amount={1000}/> on this order.</p>
            <button className={styles.place_order}>Place Order</button>
        </div>
    );
}

export default PriceCard;