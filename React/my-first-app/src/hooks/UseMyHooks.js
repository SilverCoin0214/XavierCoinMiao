import React, { useContext } from "react";
import { FirstContext, TokenContext } from "./App";

export default function useMyhook() {
  const user = useContext(FirstContext);
  const token = useContext(TokenContext);

  return [user, token];
}
