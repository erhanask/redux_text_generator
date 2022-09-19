import logo from './logo.svg';
import './App.css';
import {CountInput} from "./components/CountInput";
import {TextView} from "./components/TextView";

function App() {
  return (
    <div className="App">
      <div className="App-wrapper">
          <div className={`contents`} style={{backgroundColor:'#FFFEFF',padding:'25px'}}>
              <CountInput/>
              <TextView/>
          </div>
      </div>
    </div>
  );
}

export default App;
