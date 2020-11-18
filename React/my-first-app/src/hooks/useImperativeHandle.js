import React, { forwardRef, useImperativeHandle, useRef } from "react";

const HYinput = forwardRef((props, ref) => {
  const inputRef = useRef();

  // 通过父组件拿到ref, 传入给useImperativeHandle后, 第二个回调函数返回的对象就是父组件的ref.current.
  // 父组件之后再自己操作 ref时只能使用现在新的这个 ref.current
  useImperativeHandle(ref, () => ({
    focus: () => {
      console.log("返回对象的focus");
      inputRef.current.focus();
    },
  }));

  return <input type="text" ref={inputRef} />;
});

export default function UseImperativeHandle() {
  const inputRef = useRef();

  return (
    <div>
      <HYinput ref={inputRef} />
      <button onClick={(e) => inputRef.current.focus()}>聚焦</button>
    </div>
  );
}
