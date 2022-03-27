import styles from "./PriceCard.module.css";
const PriceCard = (props) => {
  return (
    <div className={styles.price_details_container}>
      <h2 className="price-detail-heading">Price Details</h2>
      <hr />
      <div className="price-detail-desc">
        <div className={styles.price_detail_item}>
          <span>
            Price &#40;
            {`${props.noofitems}${props.noofitems > 1 ? "items" : "item"}`}&#41;
          </span>
          <span className="price">&#8377;{props.totalprice}</span>
        </div>
        <div className={styles.price_detail_item}>
          <span>Discount</span>
          <span>
            - <span className="price">&#8377;500</span>
          </span>
        </div>
        <div className={styles.price_detail_item}>
          <span>Delivery Charges</span>
          <span className="price">&#8377;120</span>
        </div>
      </div>
      <hr />
      <div className={styles.total_amount_container}>
        <span className={styles.total_amount_title}>Total Amount</span>
        <span className={`${styles.total_amount} price`}>
          &#8377;{props.totalprice + 120 - 500}
        </span>
      </div>
      <hr />
      <p>
        You will save{" "}
        <span className="price">
          &#8377;{props.totalprice - `${props.totalprice + 120 - 500}`}
        </span>{" "}
        on this order.
      </p>
      <button className={styles.place_order}>Place Order</button>
    </div>
  );
};

export default PriceCard;
