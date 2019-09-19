import React from "react"
import styled from "styled-components"

const Animate = styled.div`
  font-size: 50px;
  color: white;
`

const BokehText = props => {
  return <Animate>{props.children}</Animate>
}

export default BokehText
