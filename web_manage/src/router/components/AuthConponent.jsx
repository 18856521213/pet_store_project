import React from 'react';
import Login from "../../views/Login/"

export default function AuthConponent(props) {
  if(sessionStorage.getItem("token")) {
    return props.to
  }else{
    return <Login></Login>
  }
}
