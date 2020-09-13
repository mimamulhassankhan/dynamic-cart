import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shipping from './Components/Shipping/Shipping';

export const CategoryContext =  createContext();

function App() {
  const [category, setCategory] = useState(['Laptop']);
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <Header/>
      <Home/>
      <Shipping/>
    </CategoryContext.Provider>
  );
}

export default App;
