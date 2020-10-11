import React, { useContext } from "react";

import { FirstContext, SecondContext } from "./App";

export default function UseContext() {
  const dataA = useContext(FirstContext);
  const dataB = useContext(SecondContext);

  console.log(dataA);
  console.log(dataB);

  return <div>获得数据</div>;
}
