import wool from "../../Images/Models/Wool_Blend_Jacket.jpg";
import knit from "../../Images/Models/Rib_Knit_Wool_Jumper.jpg";
import cotton from "../../Images/Models/Fit_Cotton_Zip_Through_Hoodie.jpg";
import dungarees from "../../Images/Models/Dungarees.jpg";
import cargo from "../../Images/Models/Fit_Cargo_Joggers.jpg";
import "./Trending.css";

const Trending = () => {
    const trend = [
        {
            id: 1,
            title: "Wool Blend Jacket",
            img: wool,
            price: 2000,
            discount: 4000,
            rating: 4.5
        },
        {
            id: 2,
            title: "Knit Wool Jumper",
            img: knit,
            price: 2500,
            discount: 4000,
            rating: 4.5
        },
        {
            id: 3,
            title: "Fit Cotton Zip Hoddie",
            img: cotton,
            price: 2800,
            discount: 3000,
            rating: 4.4
        },
        {
            id: 4,
            title: "Dungarees",
            img: dungarees,
            price: 3200,
            discount: 4000,
            rating: 4.7
        },
        {
            id: 5,
            title: "Fit Cargo Joggers",
            img: cargo,
            price: 1500,
            discount: 3000,
            rating: 4.2
        }
    ]
    return(
        <>
        <section className="trending-section container">
            <div className="section-heading">
                <h3 className="center-text">Trending</h3>
            </div>
            <div className="trending-container">
                {
                    trend.map(item=>(
                        <div className="basic-card" key={item.id}>
                            <div className="basic-card-image-title badge-image-title">
                                <img src={item.img} alt={item.title} className="product-vertical-image"/>
                            </div>
                            <div className="basic-card-primary">
                                <p className="product-title">{item.title}</p>
                                <div className="product-price-rating">
                                    <div className="product-price-container">
                                        <span className="product-price">&#8377;{item.price}</span>
                                        <span className="product-discount-price">&#8377;{item.discount}</span>
                                    </div>
                                    <div className="read-only-rating">
                                        <span className="small">{item.rating}</span>
                                        <span className="material-icons-round">star_border</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </section>
        </>
    );
}

export default Trending;