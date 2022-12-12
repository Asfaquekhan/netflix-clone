
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './component/context/Auth';
import Navbar from './component/Navbar';
import Account from './pages/Account';
import Home from './pages/Home';
import Login from './pages/Login';
import MoviePage from './pages/MoviePage';

import Signup from './pages/Signup';


function App() {
  return (
    <>
    <AuthProvider>
     
    <div className="">
     <Navbar/>
     
     <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signup" element={<Account/>}/>
      <Route path="/movie" element={<MoviePage/>}/>
     </Routes>
     </div>
    </AuthProvider>
    </>
  );
}

export default App;
