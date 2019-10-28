import React from 'react';
import ReactDOM from 'react-dom';
import TypeComponent from "./components/type.js"
const title = 'Shahan Type';
ReactDOM.render(
  <div>

  Welcome to Shahan Type
  <TypeComponent name="test" />
  </div>,
  document.getElementById('app'),
);
