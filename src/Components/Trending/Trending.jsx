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
        <section class="trending-section container">
            <div class="section-heading">
                <h3 class="center-text">Trending</h3>
            </div>
            <div class="trending-container">
                {
                    trend.map(item=>(
                        <div class="basic-card" key={item.id}>
                            <div class="basic-card-image-title badge-image-title">
                                <img src={item.img} alt={item.title} class="product-vertical-image"/>
                            </div>
                            <div class="basic-card-primary">
                                <p class="product-title">{item.title}</p>
                                <div class="product-price-rating">
                                    <div class="product-price-container">
                                        <span class="product-price">&#8377;{item.price}</span>
                                        <span class="product-discount-price">&#8377;{item.discount}</span>
                                    </div>
                                    <div class="read-only-rating">
                                        <span class="small">{item.rating}</span>
                                        <span class="material-icons-round">star_border</span>
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