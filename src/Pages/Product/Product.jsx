import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "../../Components/Filter/Filter";
import Header from "../../Components/Header/Header";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useFilter } from "../../Context/FilterContext/filter-context";
import {
  sortData,
  priceFilter,
  ratingFilter,
  instockFilter,
  categoryFilter,
  genderFilter,
} from "../../Utils";
import styles from "./Product.module.css";
import { useWishlist } from "../../Context/WishContext/wishlist-context";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext/auth-context";
const Product = () => {
  const { filterstate } = useFilter();
  const [products, setProducts] = useState([]);
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlist } = wishlistState;
  const navigate = useNavigate();
  const { authState } = useAuth();
  const { token } = authState;

  const loadProducts = async () => {
    try {
      const response = await axios.get("/api/products");
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const addToWishlistHandler = async (itemid, setIsInWishlist) => {
    if (token) {
      const product = products.find((item) => item._id === itemid);
      try {
        const response = await axios.post(
          "/api/user/wishlist",
          { product },
          { headers: { authorization: token } }
        );
        if (response.status === 201) {
          wishlistDispatch({
            type: "Add_To_Wishlist",
            payload: response.data.wishlist,
          });
          setIsInWishlist(true);
        } else {
          throw new Error();
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      navigate("/login");
    }
  };

  const removeFromWishlist = async (itemid, setIsInWishlist) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${itemid}`, {
        headers: { authorization: token },
      });
      if (response.status === 200) {
        wishlistDispatch({
          type: "Remove_from_Wishlist",
          payload: response.data.wishlist,
        });
        setIsInWishlist(false);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const checkInWishlist = (id) => {
    const item = wishlist.find((item) => item._id === id);
    return item ? true : false;
  };

  const checkWishlistAction = (itemid) => {
    return checkInWishlist(itemid)
      ? removeFromWishlist(itemid)
      : addToWishlistHandler(itemid);
  };

  useEffect(() => loadProducts(), []);
  const stockData = instockFilter(filterstate, products);
  const genderData = genderFilter(filterstate, stockData);
  const categoryData = categoryFilter(filterstate, genderData);
  const ratingData = ratingFilter(filterstate, categoryData);
  const priceFilteredData = priceFilter(filterstate, ratingData);
  const sortedData = sortData(filterstate, priceFilteredData);
  return (
    <>
      <Header />
      <div className="container">
        <Filter />
        <main>
          <div className={`wishlist-container ${styles.products_container}`}>
            {sortedData.length > 0 ? (
              sortedData.map((item) => (
                <ProductCard
                  productImg={item.image}
                  productTitle={item.title}
                  productPrice={item.price}
                  key={item._id}
                  productId={item._id}
                  productWishlistAction={checkWishlistAction}
                  removeFromWishlist={removeFromWishlist}
                  addToWishlistHandler={addToWishlistHandler}
                />
              ))
            ) : (
              <h2>No Products Found</h2>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export { Product };
