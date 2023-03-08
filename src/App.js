import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./Pages/About"
import Home from './Pages/Home';
import Projects from './Pages/Projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home></Home>}></Route>
          <Route path="/about" element = {<About></About>}></Route>
          <Route path="/projects" element = {<Projects></Projects>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
