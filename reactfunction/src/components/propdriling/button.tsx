import React from "react";
import Text from "./text";
import { useCount } from "../../context/count-context";

const Button: React.FC = () => {
  const { setCount } = useCount();
  const handleButton = () => setCount((prevCount) => prevCount + 1);
  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleButton}
      >
        Click to incerment
      </button>
      <Text />
    </>
  );
};

export default Button;
