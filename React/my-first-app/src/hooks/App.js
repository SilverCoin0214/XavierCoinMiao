import React, { createContext, useState } from "react";
// import UseEffect from "./useEffect";
// import UseContext from "./useContext";
// import UseMemo from "./useMemo";
// import UseMemo2 from "./useMemo2";
// import ForwarRef from "./forwardRef";
// import UseImperativeHandle from "./useImperativeHandle";
// import UseRef from "./useRef";
// import SceUseReducer from "./useReducer";
// import CallbackHookDemo from "./useCallback";
import UseLayoutEffect from "./useLayoutEffect";
import MyHookTest from "./MyHookTest";

export const FirstContext = createContext();
export const SecondContext = createContext();
export const TokenContext = createContext();

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <FirstContext.Provider value={{ name: "sce", yahaha: "第一数据" }}>
        <TokenContext.Provider value={"12354234539up"}>
          {show && <MyHookTest />}
        </TokenContext.Provider>
      </FirstContext.Provider>

      {/* <UseLayoutEffect /> */}
      <button onClick={(e) => setShow(!show)}>点击</button>
    </div>
  );
}
