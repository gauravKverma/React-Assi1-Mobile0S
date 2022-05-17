// import logo from './logo.svg';
import './App.css';

import {Mobile,Manufacturers} from "./components/Mobile"
import {OS,Company} from "./components/OS"

function App() {
  return (
    <div className="App">
        <Mobile/>
        <OS/>
        <Manufacturers/>
        <Company/>
    </div>
  );
}

export default App;
