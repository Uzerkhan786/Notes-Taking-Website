
import './App.css';
import Login from './components/Login'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign from './components/Sign';
import AddNote from './components/AddNote';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
function App() {
 
  
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Sign/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Signin' element={<Sign/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/AddNote' element={<AddNote/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
