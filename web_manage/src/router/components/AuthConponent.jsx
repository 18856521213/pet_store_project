import React, { useEffect } from 'react';
import Login from "../../views/Login/"

export default function AuthConponent(props) {
  useEffect(() => {
    console.log(props, "这是权限组件中的props")
  }, [props])
  if(sessionStorage.getItem("token")) {
    return props.to
  }
  return <Login></Login>
}
