import React from "react";
import Homepage from "./src/Homepage/homepage";
import { DataProvider } from "./src/Context/context";
import "./App.css";

function App() {
  return (
    <div>
      <DataProvider>
        <Homepage />
      </DataProvider>
    </div>
  );
}

export default App;
