import React, { createContext, useState } from "react";
import UseEffect from "./useEffect";
import UseContext from "./useContext";
import UseMemo from "./useMemo";
import ForwarRef from "./forwardRef";
import UseRef from "./useRef";

export const FirstContext = createContext();
export const SecondContext = createContext();

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      {/* <FirstContext.Provider value={{ name: "sce", yahaha: "sdfsd" }}>
        <SecondContext.Provider value={{ shenme: "sdre", werw: "werg" }}>
          {show && <UseContext />}
        </SecondContext.Provider>
      </FirstContext.Provider> */}

      <UseRef />
      <button onClick={(e) => setShow(!show)}>点击</button>
    </div>
  );
}
