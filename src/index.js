import React from 'react';
import ReactDOM from 'react-dom';
import TypeComponent from "./components/type.js"
import App from "./components/app.js";
const title = 'Shahan Type';
const differentTexts = [
  {
    title: "Intro",
    text: "Type this text and it will help you get faster! Here is some more filler text to make you better at typing. Here are some harder letters to type: / . , * & ^ %. Have  fun!"
  },
  {
    title: "First Real level?",
    text: "Ok So you have finished the first level? Good job I am proud of you, again here are some more symbols for typing % $ % % ^ %. Great Job!"
  },
  {
    title: "Common patterns #1: ing",
    text: "Welcome, lets work on some ing's. ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing. Whooooh, that must have been tiring. Tiring, liking, tiring, learning, tiring, eating, ing ing ing, something ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing. Something was a thing and another thing that led to something inginging, bling cling bling cling, bling cling bling cling."
  },
  {
    title: "So you hate me now?",
    text: "I hope you truely enjoyed typing all those ing's. I am very proud of you, you have made alot of amazing progress,keep going!!!&*&"
  },
  {
    title: "Paying Attention",
    text: "Hello there, I wanted to make sure that you pay attention every single leter, make suer that you do not generalize, sounds in to words. This prevents otherwise simply stupid mistakes. Lacking Mistiakesm,  "
  }];


ReactDOM.render(
  <div>
    <App differentTexts={differentTexts} />
  </div>,

  document.getElementById('app'),
);
