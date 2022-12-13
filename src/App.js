
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './component/context/Auth';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Protect from './component/Protect';
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
      <Route path="/account" element={<Protect><Account/></Protect>}/>
      <Route path="/movie" element={<MoviePage/>}/>
     </Routes>
     <Footer/>
     </div>
    </AuthProvider>
    </>
  );
}

export default App;
