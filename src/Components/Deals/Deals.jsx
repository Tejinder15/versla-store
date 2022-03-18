import men from "../../Images/2.jpg";
import women from "../../Images/3.jpg";
import styles from "./Deals.module.css";

const Deals = () => {
    const dealArr = [
        {
            id: 1,
            title: "Men",
            img: men
        },
        {
            id: 2,
            title: "Women",
            img: women
        }
    ]
    return(
        <>
        <section className="container">
            <div className="section-heading">
                <h3 className="center-text section-head">Deals For</h3>
            </div>
            <div className={styles.dealsfor_container}>
            {
                dealArr.map(item => (
                    <div className={styles.dealsfor_col}>
                        <a href="./Pages/product.html">
                            <img src={item.img} alt={item.title} className={styles.dealsfor_pic}/>
                            <div className={styles.after}>{item.title}</div>
                        </a>
                    </div>
                ))
            }   
            </div>
        </section>
        </>
    );
}

export default Deals;