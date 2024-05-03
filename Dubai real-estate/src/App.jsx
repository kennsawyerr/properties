import "./App.css";
import CircularSlide from "./components/CircularSlide";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <CircularSlide herotext="lorem ipsum dolor" />
    </>
  );
}

export default App;
