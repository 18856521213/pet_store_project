import {Routes, Route} from "react-router-dom";
import React from 'react';
import Redirect from "./components/Redirect.jsx";
import AuthConponent from "./components/AuthConponent";
import LazyLoad from "./components/LazyLoad";
export default function router() {
  return (
    <Routes>
      <Route path="/" element={<Redirect to="/login" />}></Route>
      <Route path="login" element={LazyLoad("Login")}></Route>
      <Route path="home" element={<AuthConponent to={LazyLoad("Home")}></AuthConponent>}></Route>
      <Route path="register" element={<AuthConponent to={LazyLoad("Register")}></AuthConponent>}></Route>
    </Routes>
  )
}

