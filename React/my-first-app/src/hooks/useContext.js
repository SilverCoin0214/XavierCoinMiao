import React, { useContext } from "react";

import { FirstContext, SecondContext } from "./App";

export default function UseContext(props) {
  const dataA = useContext(FirstContext);
  const dataB = useContext(SecondContext);

  console.log(dataA);
  console.log(dataB);
  console.log(props);

  return <div>获得数据</div>;
}
