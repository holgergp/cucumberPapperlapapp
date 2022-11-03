import React from "react";
import "./App.css";
import { Bohnen } from "./Bohnen";
import { Provider } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <Provider store={props.store}>
        <Bohnen />
      </Provider>
    </div>
  );
}

export default App;
