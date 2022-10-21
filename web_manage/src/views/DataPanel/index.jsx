import React from 'react';
import moduleStyle from "./index.module.css"
import MidPanel from "./components/MidPanel/"
import LeftPanel from "./components/LeftPanel/"
import RightPanel from "./components/RightPanel/"
export default function DataPanel() {
  return (
    <>
      <div className={moduleStyle.box}>
        <div className={moduleStyle.box_left}>
          <LeftPanel></LeftPanel>
        </div>
        <div className={moduleStyle.box_mid}>
          <MidPanel></MidPanel>
        </div>
        <div className={moduleStyle.box_right}>
         <RightPanel></RightPanel>
        </div>
      </div>
    </>
  )
}
