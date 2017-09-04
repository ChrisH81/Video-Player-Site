import React from "react";
import ReactDOM from "react-dom";

const App = function() {
  return <div>Hi!</div>;
}

const Yo = () => {
  return <h1>Yo!</h1>;
}

ReactDOM.render(<App />, document.querySelector('.container'));
