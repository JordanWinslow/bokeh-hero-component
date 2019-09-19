import React from "react"
import ReactDOM from "react-dom"
import BokehBackground from "./BokehBackground"
import BokehText from "./BokehText"
import "./styles.css"

const App = () => {
  return (
    <div>
      <BokehBackground>
        <BokehText>Bokeh Hero by Jordan Winslow</BokehText>
      </BokehBackground>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
