import React from 'react';
import { useDrop } from 'react-dnd'

export default function Spot({type, text, handleDrop}) {
  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: type,
    drop: (item) => {
      handleDrop(item.text)
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  })

  let backgroundColor = '#f2f2f2'; 
  if (canDrop) backgroundColor = '#3db897';
  if (isOver) backgroundColor = '#4bdcb5';

  return (   
    <div className="spot" ref={dropRef} style={{backgroundColor}}>
      {text}
      </div>      
  )
}
