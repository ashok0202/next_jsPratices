import "./App.css";

import { Route, RouterProvider, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import RootLayout from "./components/RootLayout";

function App() {
  return (
    <>
      {/* <Navbar/>
    <Products/> */}

      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
