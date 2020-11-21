import React from 'react';
import './App.css';
import CardList from './templates/CardList';
import {dataSet} from "./dataSet"


const App = () => {
     return (
    <>
       <CardList dataSet={dataSet} />
    </>
  );
}

export default App;