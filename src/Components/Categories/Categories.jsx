import tshirt from "../../Images/Categories/noun-tshirt-4464232.svg";
import shirt from "../../Images/Categories/noun-shirt-4464233.svg";
import dress from "../../Images/Categories/noun-dress-4464238.svg";
import jackets from "../../Images/Categories/noun-jacket-4464235.svg";
import shorts from "../../Images/Categories/noun-pants-4464239.svg";
import pants from "../../Images/Categories/noun-pants-4464242.svg";
import "./Category.css";

const Categories = () => {
    const category = [
    {            
        id: 1,
        title: "T-Shirt",
        img: tshirt
    },
    {
        id: 2,
        title: "Shirt",
        img: shirt
    },
    {
        id: 3,
        title: "Dress",
        img: dress
    },
    {
        id: 4,
        title: "Jackets",
        img: jackets
    },
    {
        id: 5,
        title: "Shorts",
        img: shorts
    },
    {
        id: 6,
        title: "Pants",
        img: pants
    }
    ];

    return(
        <>
        <section class="category-section container">  
            <div class="section-heading">
                <h3 class="center-text">Categories</h3>
            </div>
            <div className="category-container">
                {
                    category.map(item => (
                        <div className="category-col" key={item.id}>
                            <div className="category-col-image">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <h4 className="center-text">{item.title}</h4>
                        </div>
                    ))
                }
            </div>
        </section>
        </>
    );
}

export default Categories;