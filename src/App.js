import React, { useState } from 'react';
import './App.css';
import Card from './Card';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Spot from './Spot';

export default function App() {
  const [number1, setNumber1] = useState(2);
  const [number2, setNumber2] = useState(3);
  const [operator, setOperator] = useState('*');

  return (
    <DndProvider backend={HTML5Backend}>
    <div className="app">
    <div className="math-card">
        <Spot type="number" text={number1} handleDrop={setNumber1} />
        <Spot type="number" text={number2} handleDrop={setNumber2} />
        <Spot type="operator" text={operator} handleDrop={setOperator} />       
  <div className="total">{+eval(`${number1}${operator}${number2}`).toFixed(2)}</div>
      </div>
      <div>
        <div className="cards numbers">
          {Array(10)
            .fill(0)
            .map((n, i) => (
              <Card text={i+1} key={i} type="number" />
            ))}
        </div>

        <div className="cards operators">
          {['*', '-', '+', '/'].map((o, i) => (
            <Card key={i} text={o} type="operator" />
          ))}
        </div>
      </div>
    </div>
    </DndProvider>
  );
}
