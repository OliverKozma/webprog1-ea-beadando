import React, { useState } from 'react';

function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [rate] = useState(400); // Fix árfolyam: 1 EUR = 400 HUF

  return (
    <div>
      <h2>Valutaváltó (EUR to HUF)</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '15px' }}>
        Add meg az összeget euróban, és átszámolom forintra.
      </p>
      
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Összeg EUR-ban"
        min="0"
      />
      
      <div className="result-box">
        <h3>Eredmény: {(amount * rate).toLocaleString()} HUF</h3>
        <small>Jelenlegi árfolyam: 1 EUR = {rate} HUF</small>
      </div>
    </div>
  );
}

export default CurrencyConverter;