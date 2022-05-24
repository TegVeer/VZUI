import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Modal32 from "./components/screen32";
import Modal34 from "./components/screen34";
import Modal49 from "./components/screen49";

function App() {
  const [modalStateOne, setModalStateOne] = useState(false);
  const [modalStateTwo, setModalStateTwo] = useState(false);
  const [modalStateThree, setModalStateThree] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div
          className="btn-container"
          onClick={() => {
            setModalStateOne(true);
          }}
        >
          <h3>Launch Modal Screen32</h3>
        </div>
        {modalStateOne && <Modal32 setModalState={setModalStateOne} />}
        <div
          className="btn-container"
          onClick={() => {
            setModalStateTwo(true);
          }}
        >
          <h3>Launch Modal Screen 34</h3>
        </div>
        {modalStateTwo && <Modal34 setModalState={setModalStateTwo} />}
        <div
          className="btn-container"
          onClick={() => {
            setModalStateThree(true);
          }}
        >
          <h3>Launch Modal Screen49</h3>
        </div>
        {modalStateThree && <Modal49 setModalState={setModalStateThree} />}
      </header>
    </div>
  );
}

export default App;
