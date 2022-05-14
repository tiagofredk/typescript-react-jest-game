import React from 'react';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <Navigation/>
    </ContextProvider>
  );
}

export default App;
