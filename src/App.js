import React from 'react';
import './App.css';
import {Helmet} from 'react-helmet'

function App() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      {/* <Helmet> */}
        {/* <title>Rendering with Server</title> */}
      {/* </Helmet> */}
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}


export default App;
