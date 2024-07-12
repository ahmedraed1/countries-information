import "./App.css";
import Inputs from "./components/inputs";
function App() {
  let pageHeaderStyle = {
    width: "100%",
    height: "250px",
  };
  let concatListStyle = {
    bottom: "0",
    right: "0",
  };
  let listIconsStyle = {
    width: "48px",
    height: "48px",
  };
  return (
    <div className="App">
      <header
        style={pageHeaderStyle}
        className="headerPage flex justify-center items-center font-bold relative"
      >
        <h1 className="text-white text-3xl">✨ Countries Information ✨</h1>
        <ul
          style={concatListStyle}
          className="absolute text-white flex flex-row p-2"
        >
          <li style={listIconsStyle} className="github-image"></li>
        </ul>
      </header>
      <Inputs />
    </div>
  );
}

export default App;
