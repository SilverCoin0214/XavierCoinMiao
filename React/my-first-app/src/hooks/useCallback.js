import React, { useCallback, useState, memo } from "react";

// 不能进行性能优化的情况
// export default function CallbackHookDemo() {
//   const [count, setCount] = useState(0);

//   const increment1 = () => {
//     console.log("执行increment1");
//     setCount(count + 1);
//   };

//   // 这样性能不会优化, 依赖使用空数组只会导致返回的函数永远是原来的那一个函数, 而不会更新.
//   // 在依赖数组里加上值, 但是如果值一直是存在变化的情况, 那优化跟没优化一样
//   // 并且形成了闭包,导致increment1和increment2获取的count值不相通
//   const increment2 = useCallback(() => {
//     console.log("执行increment2");
//     setCount(count + 2);
//   }, [count]);

//   return (
//     <div>
//       <h2>useCallBack{count}</h2>
//       <button onClick={increment1}>+++1</button>
//       <button onClick={increment2}>+++2</button>
//     </div>
//   );
// }

// 可以进行性能优化的情况

// memo会对props进行浅层比较,如果没有发生改变, 那么函数组件就不会改变.
const SceButton = memo((props) => {
  console.log("scebutton重新渲染+" + props.title);
  return <button onClick={props.increment}>Sce++1</button>;
});

export default function CallbackHookDemo2() {
  console.log("callback2重新渲染");

  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  const increment1 = () => {
    console.log("执行increment1");
    setCount(count + 1);
  };

  // 定义的子组件包裹了memo后, 如果子组件与当前父组件发生更新的状态不想关时,就不会重新渲染
  // 或者说是当父组件重新渲染时, 没用useCallback包括的函数会重新定义一次,但是用了useCallback包裹后如果包裹的内容没发生改变, 就返回原来的函数
  const increment2 = useCallback(() => {
    console.log("执行increment2");
    setCount(count + 2);
  }, [count]);

  return (
    <div>
      <h2>useCallBack{count}</h2>
      <SceButton increment={increment1} title="btn1" />
      <SceButton increment={increment2} title="btn2" />
      <button onClick={(e) => setShow(!show)}>show</button>
    </div>
  );
}
