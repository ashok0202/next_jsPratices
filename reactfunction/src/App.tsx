import "./App.css";
import Componet1 from "./components/componet1";
import Products from "./components/context-with-reducer/products";
import Hooksfunction from "./components/hooksfunction";
import ProductReducer from "./components/productreducer";
import Button from "./components/propdriling/button";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <h1 className="font-bold ">Helloo Controller</h1>
      <Componet1 />
      <Hooksfunction />
      <ProductReducer />
      <h1 className="font-bold">Prop Drilling </h1>
      <Button />
      <h1 className="font-[700] text-red-500 p-10">
        Cart context using UseReducer
      </h1>

      <Products />
      <h1 className="font-bold text-red-500 m-10">React Router Dom </h1>
      <div className="flex flex-row justify-evenly">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/Login">Login</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
