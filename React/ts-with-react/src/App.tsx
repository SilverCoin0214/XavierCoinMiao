import React, {useState} from 'react';
import './App.css';
import Hello from './components/Hello'
// import MouseTracker from './components/MouseTracker'
// import useMousePositon from './hooks/useMousePosition'
import LikeButton from './components/LikeButton'

function App() {
  const [show, setShow] = useState(true)
  // const positions = useMousePositon()
  return (
    <div className="App">
      <Hello message={"hello world"} />
      {/* {show &&  <MouseTracker />} */}
      {/* <button onClick={() => setShow(!show)}>关闭</button> */}
      {/* <p>x: {positions.x} -- y: {positions.y}</p> */}
      <LikeButton />
    </div>
  );
}

export default App;
