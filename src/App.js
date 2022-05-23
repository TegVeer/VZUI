import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [modalState, setModalState] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="btn-container" onClick={()=>{setModalState(true);}}><h3>Button</h3></div>
        {modalState && <Modal setModalState={setModalState}/>}
      </header>
    </div>
  );
}

export default App;
