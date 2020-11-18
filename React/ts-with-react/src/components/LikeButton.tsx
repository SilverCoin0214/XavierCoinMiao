import React, {useState, useEffect, useRef} from 'react'

const LikeButton: React.FC = () => {
  const [num, setNum] = useState(0)
  const [on, setOn] = useState(true)
  const numRef = useRef(0)
  const didMountRef = useRef(false)


  useEffect(() => {
      document.title = `点击了${num}次`
      console.log('出现渲染')
  },[num])

  useEffect(() => {
      if (didMountRef.current) {
          console.log('this is update')
      }else {
        didMountRef.current = true
      }
  })

  function handleAlertClick() {
    setTimeout(() => {
      alert('you clicked on' + numRef.current)
    }, 3000)
  }

  return (
    <div>
        <button onClick={() => {setNum(num + 1); numRef.current++}}>+++++++++{num}</button>
        <button onClick={() => setOn(!on)}>{on ? 'ON' : 'OFF'}开关</button>
        <button onClick={handleAlertClick}>点击</button>
    </div>
  )
}


export default LikeButton
