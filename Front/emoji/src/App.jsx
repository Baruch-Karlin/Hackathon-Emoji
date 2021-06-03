import React from "react";

import "./App.css";

import Camera from "./components/Camera";
import Header from "./components/Header";
import HoverMenu from './components/HoverMenu'

const App = () => {
  return (
    <div className="root">
      <HoverMenu />
      <Header />
      <Camera />
    </div>
  );
};

export default App;
//here