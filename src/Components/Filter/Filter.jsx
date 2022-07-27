import { useState } from "react";
import { useFilter } from "../../Context/FilterContext/filter-context";
import styles from "./Filter.module.css";
import PricePoints from "./PricePoints/PricePoints";

const Filter = () => {
  const { filterstate, filterdispatch } = useFilter();
  const [showFilter, setShowFilter] = useState(false);
  return (
    <>
      <aside
        className={`${styles.filter_panel} ${
          showFilter ? styles.show_filter : ""
        }`}
      >
        <div className={styles.filter_option}>
          <h3>Filters</h3>
          <button
            className={styles.clear_btn}
            onClick={() => filterdispatch({ type: "CLEAR" })}
          >
            Clear
          </button>
        </div>
        <div className="price-option">
          <h3>Price</h3>
          <div className={styles.price_value}>
            <PricePoints point="1k" />
            <PricePoints point="2k" />
            <PricePoints point="3k" />
            <PricePoints point="4k" />
            <PricePoints point="5k" />
          </div>
          <input
            type="range"
            name="price_range"
            step={1000}
            min={1000}
            max={5000}
            value={filterstate.price}
            id="price"
            onChange={(e) =>
              filterdispatch({
                type: "PRICE",
                payload: { price: e.target.value },
              })
            }
          />
        </div>
        <div className="category-option">
          <h3>For</h3>
          <div className="input-option">
            <input
              type="radio"
              name="gender"
              id="men"
              checked={filterstate.gender === "men"}
              onChange={() =>
                filterdispatch({ type: "GENDER", payload: { gender: "men" } })
              }
            />
            <label htmlFor="men">Men Clothing</label>
          </div>
          <div className="input-option">
            <input
              type="radio"
              name="gender"
              id="women"
              checked={filterstate.gender === "women"}
              onChange={() =>
                filterdispatch({ type: "GENDER", payload: { gender: "women" } })
              }
            />
            <label htmlFor="women">Women Clothing</label>
          </div>
        </div>
        <div>
          <h3>Category</h3>
          <div className="input-option">
            <input
              type="checkbox"
              id="tshirt"
              name="tshirt"
              checked={filterstate.category.includes("T-Shirt")}
              onChange={(e) =>
                filterdispatch({
                  type: "CATEGORY",
                  payload: { category: "T-Shirt", isChecked: e.target.checked },
                })
              }
            />
            <label htmlFor="tshirt">T-Shirt</label>
          </div>
          {filterstate.gender === "women" || filterstate.gender === "" ? (
            <>
              <div className="input-option">
                <input
                  type="checkbox"
                  id="blouse"
                  name="blouse"
                  checked={filterstate.category.includes("Blouse")}
                  onChange={(e) =>
                    filterdispatch({
                      type: "CATEGORY",
                      payload: {
                        category: "Blouse",
                        isChecked: e.target.checked,
                      },
                    })
                  }
                />
                <label htmlFor="blouse">Blouse</label>
              </div>
              <div className="input-option">
                <input
                  type="checkbox"
                  id="dress"
                  name="dress"
                  checked={filterstate.category.includes("Dress")}
                  onChange={(e) =>
                    filterdispatch({
                      type: "CATEGORY",
                      payload: {
                        category: "Dress",
                        isChecked: e.target.checked,
                      },
                    })
                  }
                />
                <label htmlFor="dress">Dress</label>
              </div>
              <div className="input-option">
                <input
                  type="checkbox"
                  id="shorts"
                  name="shorts"
                  checked={filterstate.category.includes("Shorts")}
                  onChange={(e) =>
                    filterdispatch({
                      type: "CATEGORY",
                      payload: {
                        category: "Shorts",
                        isChecked: e.target.checked,
                      },
                    })
                  }
                />
                <label htmlFor="shorts">Shorts</label>
              </div>
            </>
          ) : (
            ""
          )}
          <div className="input-option">
            <input
              type="checkbox"
              id="hoodies"
              name="hoodie"
              checked={filterstate.category.includes("Hoodie")}
              onChange={(e) =>
                filterdispatch({
                  type: "CATEGORY",
                  payload: { category: "Hoodie", isChecked: e.target.checked },
                })
              }
            />
            <label htmlFor="hoodies">Hoodie</label>
          </div>
          <div className="input-option">
            <input
              type="checkbox"
              id="sweatshirt"
              name="sweatshirt"
              checked={filterstate.category.includes("Sweatshirt")}
              onChange={(e) =>
                filterdispatch({
                  type: "CATEGORY",
                  payload: {
                    category: "Sweatshirt",
                    isChecked: e.target.checked,
                  },
                })
              }
            />
            <label htmlFor="sweatshirt">Sweatshirt</label>
          </div>
          <div className="input-option">
            <input
              type="checkbox"
              id="jeans"
              name="jeans"
              checked={filterstate.category.includes("Jeans")}
              onChange={(e) =>
                filterdispatch({
                  type: "CATEGORY",
                  payload: { category: "Jeans", isChecked: e.target.checked },
                })
              }
            />
            <label htmlFor="jeans">Jeans</label>
          </div>
          <div className="input-option">
            <input
              type="checkbox"
              id="joggers"
              name="joggers"
              checked={filterstate.category.includes("Joggers")}
              onChange={(e) =>
                filterdispatch({
                  type: "CATEGORY",
                  payload: { category: "Joggers", isChecked: e.target.checked },
                })
              }
            />
            <label htmlFor="joggers">Joggers</label>
          </div>
          <div className="input-option">
            <input
              type="checkbox"
              id="shirts"
              name="shirts"
              checked={filterstate.category.includes("Shirts")}
              onChange={(e) =>
                filterdispatch({
                  type: "CATEGORY",
                  payload: { category: "Shirts", isChecked: e.target.checked },
                })
              }
            />
            <label htmlFor="shirts">Shirts</label>
          </div>
        </div>
        <div className="rating-option">
          <h3>Rating</h3>
          <div className="input-option">
            <input
              type="radio"
              name="stars"
              id="4stars"
              checked={filterstate.rating === "4"}
              onChange={() =>
                filterdispatch({ type: "RATING", payload: { rating: "4" } })
              }
            />
            <label htmlFor="4stars">4 Stars &#38; above</label>
          </div>
          <div className="input-option">
            <input
              type="radio"
              name="stars"
              id="3stars"
              checked={filterstate.rating === "3"}
              onChange={() =>
                filterdispatch({ type: "RATING", payload: { rating: "3" } })
              }
            />
            <label htmlFor="3stars">3 Stars &#38; above</label>
          </div>
          <div className="input-option">
            <input
              type="radio"
              name="stars"
              id="2stars"
              checked={filterstate.rating === "2"}
              onChange={() =>
                filterdispatch({ type: "RATING", payload: { rating: "2" } })
              }
            />
            <label htmlFor="2stars">2 Stars &#38; above</label>
          </div>
          <div className="input-option">
            <input
              type="radio"
              name="stars"
              id="1stars"
              checked={filterstate.rating === "1"}
              onChange={() =>
                filterdispatch({ type: "RATING", payload: { rating: "1" } })
              }
            />
            <label htmlFor="1stars">1 Stars &#38; above</label>
          </div>
        </div>
        <div className="sortby-option">
          <h3>Sort by</h3>
          <div className="input-option">
            <input
              type="radio"
              name="sort"
              id="low_to_high"
              checked={filterstate.sort === "low_to_high"}
              onChange={() =>
                filterdispatch({
                  type: "SORT",
                  payload: { sort: "low_to_high" },
                })
              }
            />
            <label htmlFor="low_to_high">Price - Low To High</label>
          </div>
          <div className="input-option">
            <input
              type="radio"
              name="sort"
              id="high_to_low"
              checked={filterstate.sort === "high_to_low"}
              onChange={() =>
                filterdispatch({
                  type: "SORT",
                  payload: { sort: "high_to_low" },
                })
              }
            />
            <label htmlFor="high_to_low">Price - High To Low</label>
          </div>
        </div>
      </aside>
      <button
        className={styles.filter_btn}
        onClick={() => setShowFilter(!showFilter)}
      >
        Filters
      </button>
    </>
  );
};

export default Filter;
