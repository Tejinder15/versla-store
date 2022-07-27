import men from "../../Images/2.jpg";
import women from "../../Images/3.jpg";
import styles from "./Deals.module.css";
import { useFilter } from "../../Context/FilterContext/filter-context";
import { useNavigate } from "react-router-dom";

const Deals = () => {
  const { filterstate, filterdispatch } = useFilter();
  const navigate = useNavigate();
  const dealArr = [
    {
      id: 1,
      title: "Men",
      query: "men",
      img: men,
    },
    {
      id: 2,
      title: "Women",
      query: "women",
      img: women,
    },
  ];

  const handleDealFor = (gen) => {
    filterdispatch({ type: "GENDER", payload: { gender: gen } });
    navigate("/product");
  };
  return (
    <>
      <section className="container">
        <div className="section-heading">
          <h3 className="center-text section-head">Deals For</h3>
        </div>
        <div className={styles.dealsfor_container}>
          {dealArr.map((item) => (
            <div
              className={styles.dealsfor_col}
              key={item.id}
              onClick={() => handleDealFor(item.query)}
            >
              <img
                src={item.img}
                alt={item.title}
                className={styles.dealsfor_pic}
              />
              <div className={styles.after}>{item.title}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Deals;
