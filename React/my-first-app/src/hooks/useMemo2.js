import React, { useState, useMemo, memo } from "react";

const SceInfo = memo((props) => {
  console.log("子组件重新渲染执行");
  return (
    <h2>
      名字: {props.info.name} 年龄: {props.info.age}
    </h2>
  );
});

export default function UseMemo2() {
  console.log("父组件重新渲染执行");
  // const info = { name: "sce", age: 18 };
  const [show, setShow] = useState(true);

  // 当返回的值不发生改变, 那么传入给的子组件的props就是相同的. 但如果没有useMemo,其实每次传入的都是一个新对象,虽然属性值一样
  const info = useMemo(() => {
    return { name: "sce", age: 18 };
  }, []);

  return (
    <div>
      <SceInfo info={info} />
      <button onClick={(e) => setShow(!show)}>刷新组件</button>
      {show && <h2>组件渲染 </h2>}
    </div>
  );
}
