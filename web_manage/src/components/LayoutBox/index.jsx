import React from 'react';
import { Outlet } from 'react-router-dom';

export default function LayoutBox() {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  )
}
