import './App.css';
import {  Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Share from './pages/Share';
import Email from './pages/Email';
function App() {
  return (

    <Routes>
      <Route path='/login' element ={<Login/>} />
      <Route path='/register' element ={<Register/>} />
      <Route path='/' element ={<Home/>}/>
      <Route path='/search' element ={<Share/>}/>
      <Route path='/email' element={<Email/>}/>
    </Routes>

  );
}

export default App;
