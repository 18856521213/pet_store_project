import "./assets/css/reset.css"
import './App.less';

import {BrowserRouter} from "react-router-dom";
import Router from "./router/";



function App() {
  const a = "sss";
  return (
    <BrowserRouter>
      <Router></Router>
    </BrowserRouter>
  );
}

export default App;
