import React, {createContext, useState } from 'react';
import './ReactExperiments.css';
import ReduxContext from './ReduxContext/ReduxContext';
import Button from '@mui/material/Button';

let a = {button1: 0, button2: 0}
export const TestContext = React.createContext(a);

function ReactExperiments() {
const [count, setCount] = useState(a);



  return (
    <TestContext.Provider value={count}>
    <div className="Homepage">
      <header className="App-header">
        <h1>
          Experiment page
        </h1>
      </header>
      <Button variant="contained" onClick={() => {setCount(a => ({...a, button1: a.button1 += 1}))}}>Button1</Button>
      <Button variant="contained" onClick={() => {setCount(a => ({...a, button2: a.button2 += 1}))}}>Button2</Button>
      <ReduxContext />


    </div>
    </TestContext.Provider>
  );
}

export default ReactExperiments;
