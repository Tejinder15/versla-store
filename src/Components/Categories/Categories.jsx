import {useState,useEffect} from "react";
import axios from "axios";
import styles from "./Category.module.css";

const Categories = () => {
    const [category,setCatgory] = useState([]);

    const loadCategory = async () =>{
        try{
            const response = await axios.get("/api/categories");
            setCatgory(response.data.categories);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>loadCategory(),[]);

    return(
        <>
        <section className="container">  
            <div className="section-heading">
                <h3 className="center-text section-head">Categories</h3>
            </div>
            <div className={styles.category_container}>
                {
                    category.map(item => (
                        <div className={styles.category_col} key={item._id}>
                            <div className={styles.category_col_image}>
                                <img src={item.image} alt={item.categoryName} className={styles.category_img}/>
                            </div>
                            <h4 className="center-text">{item.categoryName}</h4>
                        </div>
                    ))
                }
            </div>
        </section>
        </>
    );
}

export default Categories;