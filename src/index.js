import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { createContext } from "react";


const StateContext = createContext();



const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(
  <React.StrictMode>

   <BrowserRouter >
      <StateContext.Provider value={0}>
        <App />
      </StateContext.Provider>
      </BrowserRouter>
      
  </React.StrictMode>
);








