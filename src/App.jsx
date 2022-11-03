import React from "react";
import "./App.css";
import { Bohnen } from "./Bohnen";
import { Provider } from "react-redux";

function App(props) {
  return (
    <div className="App m-2">
      <Provider store={props.store}>
          <h1 className="text-3xl text-gray-700 font-bold mb-5">The Bean Box</h1>
        <Bohnen />
      </Provider>
    </div>
  );
}

export default App;
