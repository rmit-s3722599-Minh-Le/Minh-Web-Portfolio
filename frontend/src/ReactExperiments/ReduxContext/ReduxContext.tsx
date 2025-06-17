import React, { useRef } from 'react';
import { TestContext }  from '../ReactExperiments';

let counter = 0

function ReduxContext() {
  const { button1, button2 } = React.useContext(TestContext);
  counter += 1


    return (
    <div>
      <header>
        <h1>
          Rendering count: 
        </h1>
        <p>
          Rendering with Context: {counter}
        </p>
        <p>
          Button pressed: {button1}
        </p>
        <p>
          Rendering with Redux: {}
        </p>
      </header>
    </div>
  );
}

export default ReduxContext;
