import React from 'react';
import ReactDOM from 'react-dom';
import TypeComponent from "./components/type.js"
import App from "./components/app.js";
const title = 'Shahan Type';
const differentTexts = [
  {
    title: "Intro",
    text: "Type this text and it will help you get faster! Here is some more filler text to make you better at typing. Here are some harder letters to type: / . , * & ^ %. Have fun!"
  },
  {
    title: "First Real level?",
    text: "Ok So you have finished the first level? Good job I am proud of you, again here are some more symbols for typing % $ % % ^ %. Great Job!"
  },
  {
    title: "Common patterns 1: ing",
    text: "Welcome, lets work on some ings. ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing. Whooooh, that must have been tiring. Tiring, liking, tiring, learning, tiring, eating, ing ing ing, something ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing ing. Something was a thing and another thing that led to something inginging, bling cling bling cling, bling cling bling cling."
  },
  {
    title: "So you hate me now?",
    text: "I hope you truely enjoyed typing all those ing's. I am very proud of you, you have made alot of amazing progress,keep going!!!&*&"
  },
  {
    title: "Paying Attention",
    text: "Hello there, I wanted to make sure that you pay attention every single leter, make suer that you do not generalize, sounds in to words. This prevents otherwise simply stupid mistakes. Lacking Mistiakesm,  which nobbody woulld evver wantt to make!? Hooow iss it going? gooodbye!"
  },
  {
    title: "Wood Pecker Chuck Chuck",
    text: "To those cheeky enough to claim that the preluding \"examinations\" are lacking in difficulty, i have yet another obsical for you to overcome. Including spelling erors, many different Abreviations and false caPitalization$. Good luck!@*^! How much wood wood a wood chcuk chuck if a wood cuck would chock wuud? The answer is oblivious; nun, nil none, nothing, void, error 404 %Bx16 or in other words: nada. And no matter how hard thy may struggle to force feed an overgrown chipmunck wood, you would never succeed in in overcoming the insurmountable issue that is animal abuse and P3Ta*."
  },
  {
    title: "Common patterns 2 ion",
    text: "Welcome, lets work on some ion. Ion ion ion ion ion ion ion ion. Capitalization, compression capitalization compression capitalization compression capitalization compression. Ion ion ion ion ion. Education of million union million union million union million union million union. ion ion ion ion ion ion ion ion."
  },
  {
    title: "Speed",
    text: "Welcome to this amazing level. In this level you get to type really really fast. It is all normal words that you might encounter in everyday life, so it is benifical for you to get fast at these words. Good job, you are doing great so far. Here are some more words that you need to type, just for the purpose of making this text as long as possible. By this time you're getting close to the end, so agian like always, I am proud of all the progress we arae making."
  }

];


ReactDOM.render(
  <div>
    <App differentTexts={differentTexts} />
  </div>,

  document.getElementById('app'),
);
