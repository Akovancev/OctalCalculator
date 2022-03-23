import React from 'react';
import { Routes, Route } from "react-router-dom";
import Calculator from "./components/Calculator/Calculator";
import Training from './components/Training/Training';


function App() {
  return (
    <Routes>
      <Route path='/training' element={<Training />} />
      <Route path='/' element={<Calculator />} />
    </Routes>
  );
}

export default App;
