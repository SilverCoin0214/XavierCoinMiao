import React, { useContext } from "react";

import useMyhook from "./UseMyHooks";

export default function MyHookTest(props) {
  const [user, token] = useMyhook();

  console.log(user);
  console.log(token);
  console.log(props);

  return <div>获得数据</div>;
}
