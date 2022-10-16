import React, { useEffect } from 'react'

export default function AuthConponent(props) {
  useEffect(() => {
    console.log(props, "这是权限组件中的props")
  }, [])
  return props.to
}
