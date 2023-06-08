import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Movies from './Components/Movies/Movies';
import TvShows from './Components/TvShows/TvShows';
import People from './Components/People/People';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';
import jwtDecode from 'jwt-decode';
import Details from './Components/Details/Details';
import DetailsTV from './Components/DetailsTV/Details';
import DetailsPerson from './Components/DetailsPerson/Details';

function App() {

  let [logInData,setlogInData]=useState(null);
  function setUserData(){
    let token = localStorage.getItem('token');
    let decode = jwtDecode(token);
    setlogInData (decode);
  }

  function logout(){
    localStorage.removeItem('token');
    setlogInData(null);
    Navigate('/Login');
  }

  useEffect ( ()=>{
    if(localStorage.getItem('token')){
      setUserData();
    }
  } , [] )

  return (
    <div className="">
      <Navbar logInData={logInData} logout={logout} />
      <div className='container'>
        <Routes>
          <Route element={<ProtectedRoutes logInData={logInData} />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='Movies' element={<Movies />}></Route>
            <Route path='TvShows' element={<TvShows />}></Route>
            <Route path='People' element={<People />}></Route>
            <Route path='About' element={<About />}></Route>
            <Route path='Details' element={<Details />}></Route>
            <Route path='DetailsTV' element={<DetailsTV />}></Route>
            <Route path='DetailsPerson' element={<DetailsPerson />}></Route>
          </Route>
          <Route path='Login' element={<Login setUserData={setUserData} />}></Route>
          <Route path='Register' element={<Register />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;