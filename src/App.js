import Info from "./Components/Info/Info";
import "./App.css";
import gentlemen from "./gentelmen";
import Gentlemen from "./Components/Gentlemen/Gentlemen";

function App() {
  return (
    <div className="container">
      <Info gentlemen={gentlemen} />
      <main className="main">
        <Gentlemen gentlemen={gentlemen} />
      </main>
    </div>
  );
}

export default App;
