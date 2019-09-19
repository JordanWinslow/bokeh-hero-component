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

/* TODO: Implement This Logic:

var fancyHeading = document.getElementsByClassName('fancy')[0];
var letters = fancyHeading.textContent.split('');

var content = letters.map((val, i) => {
  let delay = Math.floor((Math.random() * 1000) + 1);
  return ('<span style="animation-delay: '+ delay + 'ms">'
          + val +
          '</span>');
});

fancyHeading.innerHTML = "";

for (var i = 0; i < content.length; i++) {
  fancyHeading.innerHTML += content[i];
}

*/

/* TODO: Implement This Styling:

@import url('https://fonts.googleapis.com/css?family=Raleway:300');

$white: #f4f4f2;
$black: #1e1e1d;
$feature: #71cdf2;

body, html {
  height: 100%;
  margin: 0;
  background: $white;
}

#HeroSection {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Raleway', sans-serif;

  text-align: center;
}

h1 {
  color: $feature;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1rem;
  margin: 0;
  span {
    animation: fadeIn 1s alternate infinite;
    opacity: 0;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    filter: blur(10px);
  }
  50%, 100% {
    opacity: 1;
    filter: blur(0px);
  }
}

*/

const BokehText = props => {
  return <Animate>{props.children}</Animate>
}

export default BokehText
