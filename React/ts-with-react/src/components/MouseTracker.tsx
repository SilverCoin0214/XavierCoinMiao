import React, {useState, useEffect} from 'react'

const MouseTracker: React.FC = () => {
  const [positions, setPositions] = useState({x: 0, y: 0})


  useEffect(() => {
      console.log('添加effect--' + positions.x)
      const updateMouse = (e: MouseEvent) => {
        console.log('点击')
        setPositions({
          x: e.clientX,
          y: e.clientY
        })
      }

      document.addEventListener('click', updateMouse)

      return () => {
        console.log('卸载effect--' + positions.x)
        document.removeEventListener('click', updateMouse)
      }
  }, []) // 给effect加个空数组表示effect只会加载一次.不会每次渲染都添加新的effect然后用完卸载effect

  return (
  <p>x: {positions.x} -- y: {positions.y}</p>
  )
}

export default MouseTracker
