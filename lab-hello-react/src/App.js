import "./App.css";

import logo from "./images/ironhack-logo-xs.png";
import bar from "./images/menu-top-xs.png";
import img1 from "./images/icon1.png";
import img2 from "./images/icon2.png";
import img3 from "./images/icon3.png";
import img4 from "./images/icon4.png";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="ironhack-logo" />
      <img src={bar} alt="menu-bar" />
      <h1>Say hello to ReactJS</h1>
      <p>
        You will learn how to use the most popular frontend library, and become
        a super Ninja developer
      </p>
      <button>Awesome!</button>
      <img src={img1} alt="ironhack-icon1" />
      <img src={img2} alt="ironhack-icon2" />
      <img src={img3} alt="ironhack-icon3" />
      <img src={img4} alt="ironhack-icon4" />
    </div>
  );
}

export default App;
