import React, {useState, useEffect} from 'react'


const useMousePosition = () => {
  const [positions, setPositions] = useState({x: 0, y: 0})

  useEffect(() => {
    console.log('添加effect--' + positions.x)
    const updateMouse = (e: MouseEvent) => {
      setPositions({
        x: e.clientX,
        y: e.clientY
      })
    }

    document.addEventListener('mousemove', updateMouse)

    return () => {
      console.log('卸载effect--' + positions.x)
      document.removeEventListener('mousemove', updateMouse)
    }
}, []) // 给effect加个空数组表示effect只会加载一次.不会每次渲染都添加新的effect然后用完卸载effect

    return positions
}


export default useMousePosition
