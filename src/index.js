import React from 'react';
import ReactDOM from 'react-dom';
import TypeComponent from "./components/type.js"
const title = 'Shahan Type';
ReactDOM.render(
  <div>

    Welcome to Shahan Type
    <div className="outerTextContainer">
      <TypeComponent text="Type this text and it will help you get faster! Here is some more filler text to make you better at typing. Here are some harder letters to type: / . , * & ^ %. Have  fun!" />
    </div>
  </div>,

  document.getElementById('app'),
);
