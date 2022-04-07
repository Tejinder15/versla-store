import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "../../Components/Filter/Filter";
import Header from "../../Components/Header/Header";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useFilter } from "../../Context/FilterContext/filter-context";
import { addToCart } from "../../Utils/";
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
import { useCart } from "../../Context/CartContext/cart-context";
import { addToWishlist, removeFromWishlist } from "../../Utils/";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
const Product = () => {
  const { filterstate } = useFilter();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();
  const { cartState, cartDispatch } = useCart();
  const { cart } = cartState;
  const navigate = useNavigate();
  const { authState } = useAuth();
  const { token } = authState;

  const loadProducts = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/products");
      setProducts(response.data.products);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const addToCartHandler = (product) => {
    addToCart(product, token, cartDispatch);
  };

  const addToWishlistHandler = (product) => {
    addToWishlist(product, token, wishlistDispatch);
  };

  const removeFromWishlistHandler = (itemid) => {
    removeFromWishlist(itemid, token, wishlistDispatch);
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
            {isLoading ? (
              <LoadingSpinner />
            ) : sortedData.length > 0 ? (
              sortedData.map((item) => (
                <ProductCard
                  key={item._id}
                  addToCart={addToCartHandler}
                  productDetail={item}
                  addToWishlistHandler={addToWishlistHandler}
                  removeFromWishlistHandler={removeFromWishlistHandler}
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
