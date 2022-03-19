import {Cart,Home,Signup,Login,Wishlist,Product} from "./Pages/";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
