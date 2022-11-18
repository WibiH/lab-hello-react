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
      <div className="front">
        <div className="logos">
          <img src={logo} alt="ironhack-logo" />
          <img src={bar} alt="menu-bar" />
        </div>
        <div className="head">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use <br></br> the most popular frontend
            library,<br></br> and become a super Ninja developer
          </p>
          <button>Awesome!</button>
        </div>
      </div>

      <div className="icons">
        <div className="row">
          <img src={img1} alt="ironhack-icon1" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="row">
          <img src={img2} alt="ironhack-icon2" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="row">
          <img src={img3} alt="ironhack-icon3" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div className="row">
          <img src={img4} alt="ironhack-icon4" />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
