import React from 'react';
import './App.css';
import  "./assets/reset.css";
import "./assets/style.css"
import Router from "./Router"
import Header from './templates/components/Header/Header';

const App = () => {
     return (
     <>
       <Header />
       <main>
          <Router />
       </main>
      </> 
  );
}

export default App;