import React, { useState } from 'react';
import TodoList from './components/TodoList';
import CurrencyConverter from './components/CurrencyConverter';
import './App.css'; 

function App() {
  
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="app-container">
      <h1>React SPA Feladat</h1>
      
      <nav>
        <button 
          className={activeTab === 'home' ? 'active' : ''} 
          onClick={() => setActiveTab('home')}
        >
          Főoldal
        </button>
        <button 
          className={activeTab === 'todo' ? 'active' : ''} 
          onClick={() => setActiveTab('todo')}
        >
          Teendők
        </button>
        <button 
          className={activeTab === 'currency' ? 'active' : ''} 
          onClick={() => setActiveTab('currency')}
        >
          Valutaváltó
        </button>
      </nav>

      <div className="component-card">
        {activeTab === 'home' && (
          <div>
            <h2>Üdvözöllek!</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Kérlek, válassz a fenti menüből egy alkalmazást a megnyitáshoz!
            </p>
          </div>
        )}
        
        {activeTab === 'todo' && <TodoList />}
        {activeTab === 'currency' && <CurrencyConverter />}
      </div>
    </div>
  );
}

export default App;