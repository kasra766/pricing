import Navbar from "./navbar/Navbar";
import ScrollToTop from "./ScrollToTop";
import Body from "./Body";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <ScrollToTop/>
    </div>
  );
}

export default App;
