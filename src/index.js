import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext/auth-context";
import { FilterProvider } from "./Context/FilterContext/filter-context";
import { WishlistProvider } from "./Context/WishContext/wishlist-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <WishlistProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </WishlistProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
