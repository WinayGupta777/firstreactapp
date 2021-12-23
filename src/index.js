//es6 standards
import React from "react";
import ReactDOM from "react-dom";

// we are using react's dom, 
// this will render our content 
// to brower.

// .render() will take two param
// 1st == JSX (Html tag)
// 2nd == will give this JSX, to index.html's body-->div
//        bcoz index.html is the one who gives content to browser!! 

// <> ... </> This is called "react fragment"
ReactDOM.render(
  <>
    <img src="https://rukminim1.flixcart.com/flap/50/50/image/d5e889d535edb9f6.jpg?q=50"></img>
    <a href="">Buy here</a>
  </>, 
  document.getElementById("root")
)