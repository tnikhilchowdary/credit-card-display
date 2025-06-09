import { useState } from 'react';
import './App.css';

function App() {
  const [cardNum, setcardNum] = useState('');
  const [name, setName] = useState('');
  return (
    <div className="container">
      <div className="left-panel">
        <h2>CREDIT CARD</h2>
        <div className="card">
          <div className="chip"></div>
          <div className="card-number">{cardNum}</div>
          <div className="cardholder-label">CARDHOLDER NAME</div>
          <div className="cardholder-name">{name}</div>
        </div>
      </div>

      <div className="right-panel">
        <div className="form-container">
          <h3>Payment Method</h3>
          <input type="text" 
          placeholder="Enter Card Holder Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
          <input type="number" 
          placeholder="Enter Card Holder Number" 
          value={cardNum}
          onChange={(e) => setcardNum(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
