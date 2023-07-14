import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Protected from './Protected';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Protected><Home/></Protected>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
