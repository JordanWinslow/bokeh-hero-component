/* 
Author: Jordan Winslow
LICENSE: Attribution-NonCommercial 4.0 International
License Link: https://creativecommons.org/licenses/by-nc/4.0/legalcode 
*/

import React from "react"
import ReactDOM from "react-dom"
import BokehBackground from "./BokehBackground"
import BokehText from "./BokehText"
import "./styles.css"

const App = () => {
  return (
    <div>
      <BokehBackground>
        <BokehText bokehText="Bokeh Hero by Jordan Winslow" />
      </BokehBackground>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
