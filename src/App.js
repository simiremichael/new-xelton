import Home from './components/Home';
import {Routes, Route} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import "./App.css";



function App() {
  return (
    <div className="App">
       <Routes>
   <Route path='/' element={<Home/>}></Route>
   <Route path='/About' element={<About/>}></Route>
   <Route path='/Contact' element={<Contact/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
