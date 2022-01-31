import gentlemen from "./gentelmen";
import Gentleman from "./Components/Gentleman/Gentleman";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Gentleman gentleman={gentlemen[0]} />
    </div>
  );
}

export default App;
