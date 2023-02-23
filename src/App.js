import React from "react";
import "../src/App.css"
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import info from "./components/Info";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main info1 = {info.data1} info2 = {info.data2} info3 = {info.data3} />
    </div>
  );
}

export default App;