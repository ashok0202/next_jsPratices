import { createContext, useContext, useMemo, useState } from "react";

interface InitialValue {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const CountContext = createContext<InitialValue>({}as InitialValue);

//Provider
const CountProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState<number>(0);
 
  //Memo is used to avoid unnecessary re-renders
  const value = useMemo(() => ({ count, setCount }), [count]);

  return (
    //Provider is used to provide the context
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
};

//Consumer
const useCount = () => useContext(CountContext);

export { CountProvider, useCount };
