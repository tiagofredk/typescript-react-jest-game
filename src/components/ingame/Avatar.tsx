import React from 'react'
interface iProp {
  positionX: number,
  positionY: number,
  name: string
}

export default function Avatar({positionX, positionY, name}: iProp) {
  return (
    <div
      style={{
        position: "absolute",
        top: `${positionY}px`,
        left: `${positionX}px`,
        width: "30px",
        height: "30px",
      }}
      className='avatar'
    >
      {name}
    </div>
  )
}
