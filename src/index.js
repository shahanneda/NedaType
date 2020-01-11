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
    title: "The Key",
    text: "Nice job on finishing the first level! We are sure that you are already making lots of progress. One very important thing to remember is that the key to improvement is consistency. Everyday you should be working on the skills you want to improve, even days that you do not feel like working. So make sure to come back and work on your typing a little everyday. Even 5 or 10 minutes are good enough, as long as you keep coming back every single day. "
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
    text: "Hello there, I wanted to make sure that you pay attention every single leter, make suer that you do not generalize, sounds in to words. This prevents otherwise simply stupid mistakes. Lacking Mistiakesm,  which nobbody woulld evver want to make!? Hoow is it going? gooodbye!"
  },
  {
    title: "Wood Pecker Chuck Chuck",
    text: "To those cheeky enough to claim that the preluding \"examinations\" are lacking in difficulty, i have yet another obsical for you to overcome. Including spelling erors, many different Abreviations and false caPitalization$. Good luck!@*^! How much wood wood a wood chcuk chuck if a wood cuck would chock wuud? The answer is oblivious; nun, nil none, nothing, void, error 404 %Bx16 or in other words: nada. And no matter how hard thy may struggle to force feed an overgrown chipmunck wood, you would never succeed in in overcoming the insurmountable issue that is animal abuse and P3Ta*."
  },
  {
    title: "Common patterns 2: ion",
    text: "Welcome, lets work on some ion. Ion ion ion ion ion ion ion ion. Capitalization, compression capitalization compression capitalization compression capitalization compression. Ion ion ion ion ion. Education of million union million union million union million union million union. ion ion ion ion ion ion ion ion."
  },
  {
    title: "Speed",
    text: "Welcome to this amazing level. In this level you get to type really really fast. It is all normal words that you might encounter in everyday life, so it is benifical for you to get fast at these words. Good job, you are doing great so far. Here are some more words that you need to type, just for the purpose of making this text as long as possible. By this time you're getting close to the end, so again like always, I am proud of all the progress we are making."
  },
  {
    title: "Time",
    text: "We all have a limited time. Time runs out, ime ime ime ime ime. Some times we also have a time limit on the tasks we need to do. For example right now, someone in the world needs to be working on their english project, but instead, that someone is typing out this level. Every second goes by, second by second, time after time. ime ime ime."
  },
  {
    title: "Test",
    text: "What is a test? A test is a test of your abilities.  Some test are not difficult, but some other tests can be very difficult, which is why I am writing this level right now. Instead of going and studing for the extremly difficult test I have to do, I am sitting here and typing this level out. Word by word, leter by letter, keystroke by keystroke."
  },
  {
    title: "Finger roll!",
    text: "Firstly, right hand, jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; ;lkj ;lkj ;lkj ;lkj ;lkj ;lkj ;lkj ;lkj ;lkj ;lkj jkl; jkl; jkl; jkl; jkl; jkl; ;lkj ;lkj ;lkj Now on to the left hand: asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf fdsa fdsa fdsa fdsa fdsa fdsa fdsa fdsa fdsa fdsa asdf asdf asdf asdf asdf."
  },
  {
    title: "English class",
    text: "My friends and I are in english class. We are procrastinating because we are bored. Nevermind, my deskmate corrected me saying that he was done. English class is lowkey boring. I'm simply making this typing test in order to escape the inevitable death approaching me *cough* I mean literally english and speeches are going to be the epitaph of me. The deskmate is clearly bored as well. I is glancing over to see what I am doing from time to time and spinning his pencil. This test is becoming too long, so long suckers."
  },

];


ReactDOM.render(
  <div>
    <App differentTexts={differentTexts} />
  </div>,

  document.getElementById('app'),
);
