import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './routing'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;



