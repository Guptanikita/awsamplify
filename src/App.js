import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Home from './Pages/Home';
import HomeFooter from './Components/HomeFooter';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <HomeFooter />
    </div>
  );
}

export default App;


