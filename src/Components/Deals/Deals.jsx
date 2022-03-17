import men from "../../Images/2.jpg";
import women from "../../Images/3.jpg";

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
        <section className="dealsfor-section container">
            <div className="section-heading">
                <h3 className="center-text">Deals For</h3>
            </div>
            <div className="dealsfor-container">
            {
                dealArr.map(item => (
                    <div className="dealsfor-col">
                        <a href="./Pages/product.html">
                            <img src={item.img} alt={item.title} className="dealsfor-pic"/>
                            <div className="after">{item.title}</div>
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