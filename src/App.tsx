import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <div className="main__content">
        <ProductList />
      </div>
    </div>
  );
}

export default App;
