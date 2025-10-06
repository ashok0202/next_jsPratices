import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handletoNavigation = () => {
    navigate("/cart");
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className=" flex flex-col font-bold items-center m-10 p-10">
          This is Home page...
          <button onClick={handletoNavigation}>Go to cart</button>
        </div>
      </div>
    </>
  );
};

export default Home;
