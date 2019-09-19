import React from "react"
import styled from "styled-components"

const Animate = styled.div`
  font-size: 50px;
  color: white;
  text-align: center;
  line-height: 100vh;
`

const BokehText = props => {
  return <Animate>{props.children}</Animate>
}

export default BokehText
