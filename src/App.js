import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./component/context/Auth";
import Footer from "./component/Footer";
import List from "./component/List";
import Navbar from "./component/Navbar";
import Protect from "./component/Protect";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MoviePage from "./pages/MoviePage";
import Search from "./pages/Search";

import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <AuthProvider>
        <div className="">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/account"
              element={
                <Protect>
                  <Account />
                </Protect>
              }
            />
            <Route path="/movie/:id" element={<MoviePage />} />
            <Route path="/search" element={<Search />} />
            <Route path="/list" element={<List />} />
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
