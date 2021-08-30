import React from 'react';

const App = () => {
  console.log(`Client is running in ${process.env.REACT_APP_NODE_ENV.toUpperCase()} mode!`);
  return (
    <div>
      <h1>React App</h1>
    </div>
  );
}

export default App;
