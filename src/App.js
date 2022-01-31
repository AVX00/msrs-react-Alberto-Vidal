import Info from "./Components/Info/Info";
import "./App.css";
import gentleman from "./gentelmen";
import Gentlemen from "./Components/Gentlemen/Gentlemen";
import { useState } from "react";

function App() {
  return (
    <div className="container">
      <Info gentleman={gentleman} />
      <main className="main">
        <Gentlemen gentleman={gentleman} />
      </main>
    </div>
  );
}

export default App;
