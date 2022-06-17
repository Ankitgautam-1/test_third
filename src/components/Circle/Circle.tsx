import React from 'react'
import "./Circle.scss";
interface CircleProps{
    Height:number,
    Width:number
}
const Circle = ({Height,Width}:CircleProps) => {
  return (
    <div style={{width:Width,height:Height}} className='circle'>
        
    </div>
  )
}

export default Circle