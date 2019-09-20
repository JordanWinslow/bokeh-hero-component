/* 
Author: Jordan Winslow
LICENSE: Attribution-NonCommercial 4.0 International
License Link: https://creativecommons.org/licenses/by-nc/4.0/legalcode 
*/

import React, { Suspense } from "react"
import ReactDOM from "react-dom"
// import BokehBackground from "./BokehBackground"
import BokehText from "./BokehText"
import "./styles.css"
const BokehBackground = React.lazy(() => import("./BokehBackground"))

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <BokehBackground>
          {/*<BokehText bokehText="Bokeh Hero by Jordan Winslow" />*/}
        </BokehBackground>
      </Suspense>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
