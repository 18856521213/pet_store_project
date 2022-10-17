import React from 'react';
import moduleStyle from "./index.module.css"
import { Outlet } from 'react-router-dom';

export default function LayoutBox() {
  return (
    <div className={moduleStyle.box}>
      <div className={moduleStyle.content}>
        <Outlet></Outlet>
      </div>
    </div>
  )
}
