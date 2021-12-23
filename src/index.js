//es6 standards
import React from "react";
import ReactDOM from "react-dom";

import App from "./App"; //import component(name)

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
    <App/>
  </>, 
  document.getElementById("root")
)