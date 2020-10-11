import React, { forwardRef, useRef } from "react";

const HYinput = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

export default function FowarRef() {
  const inputRef = useRef();

  return (
    <div>
      <HYinput ref={inputRef} />
      <button onClick={(e) => inputRef.current.focus()}>聚焦</button>
    </div>
  );
}
