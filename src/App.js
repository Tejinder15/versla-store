import {Cart,Home,Signup,Login,Wishlist,Product} from "./Pages/";
import { ProtectedRoute } from "./Routes/protected-route";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mock" element={<Mockman/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="*" element={<h1 className="center-text">There's Nothing Here!</h1>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path="wishlist" element={<Wishlist/>} />
          <Route path="cart" element={<Cart/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
