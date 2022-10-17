import {Routes, Route} from "react-router-dom";
import React from 'react';
import Redirect from "./components/Redirect.jsx";
import AuthConponent from "./components/AuthConponent";
import LazyLoad from "./components/LazyLoad";
export default function router() {
  return (
    <Routes>
      <Route path="login" element={LazyLoad("views", "Login")}></Route>
      <Route path="/" element={<AuthConponent to={LazyLoad("views", "Home")}></AuthConponent>}>
        <Route path="dataPanel" element={<AuthConponent to={LazyLoad("views", "DataPanel")}></AuthConponent>}></Route>
        <Route path="/" element={<Redirect to="dataPanel" />}></Route>
      </Route>
      <Route path="register" element={LazyLoad("views", "Register")}></Route>
    </Routes>
  )
}

