import React from 'react';
import { useDrag } from 'react-dnd';

export default function Card({ text, type }) {
  const [{ opacity }, dragRef] = useDrag({
    item: { type, text },
    collect: (monitor) => ({ 
      opacity: monitor.isDragging() ? .5 : 1
     })
  });
  return <div className="card" ref={dragRef} style={{ opacity }} >
    {text}
    </div>;
}
