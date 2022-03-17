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
        <section class="dealsfor-section container">
            <div class="section-heading">
                <h3 class="center-text">Deals For</h3>
            </div>
            <div class="dealsfor-container">
            {
                dealArr.map(item => (
                    <div class="dealsfor-col">
                        <a href="./Pages/product.html">
                            <img src={item.img} alt={item.title} class="dealsfor-pic"/>
                            <div class="after">{item.title}</div>
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