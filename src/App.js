import React from 'react';
import './App.css';

function App() {
  const items = [];
  for (let i = 1; i < 10; i++) {
    items.push(i);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, World!</h1>
        <ul className="App-list">
          {items.map(item => (
          <li className="App-item" key={item}><a href="#" className="App-link">Item {item}</a></li>
          ))}
        </ul>
      </header>      
    </div>
  );
}

export default App;
