import React from "react"
import styled from "styled-components"

const Animate = styled.div`
position: relative;
z-index: 3;
display: flex;
height: 100vh;
pointer-events: none;
justify-content: center;
align-items: center;
  font-size: 50px;
  color: white;
`

const BokehText = props => {
  return <Animate>{props.children}</Animate>
}

export default BokehText
