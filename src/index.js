import React from 'react';
import ReactDOM from 'react-dom';
import TypeComponent from "./components/type.js"
import App from "./components/app.js";
const title = 'Shahan Type';
const differentTexts = [
  "Type this text and it will help you get faster! Here is some more filler text to make you better at typing. Here are some harder letters to type: / . , * & ^ %. Have  fun!",
  "Ok So you have finished the first level? Good job I am proud of you, again here are some more symbols for typing % $ % % ^ %. Great Job!!"

];


ReactDOM.render(
  <div>
    <App differentTexts={differentTexts} />
  </div>,

  document.getElementById('app'),
);
