import React, {useState} from 'react';
import './App.css';


function App() {

  // ******* Add your code below to use React's useState
  // hook to track and update a variable called counter1






  // ****** Start here!
  // ****** Add code for counter2 on the right side of the screen





  return (

    <main>
    
      {/* Change the content of col1 below to show and */}
      {/* modify the value of counter1 */}
      <div className="col1">
        <div className="inlineB">
          <p className="num">{0}</p>
          <button className="minus">-</button>
          <button className="plus">+</button>
        </div>
      </div>
    

      {/* Change this code to show and change counter2 */}
      <div className="col2">
        <div className="inlineB">
          <p className="num" id="p2">0</p>
          <button className="minus" id="m_btn">-</button>
          <button className="plus" id="p_btn">+</button>
        </div>
      </div>

    </main>

  );
}

export default App;




// Instructions

// In 'App.jsx' you will see two counters. Neither one currently works. You should add code so that the right counter can increment or decrement a variable called counter2 and show its value in the <p> tag in that column. Here, you should use standard JavaScript functionality like onClick or addEventListener() and element.textContent or element.innerHTML.

// Next, make the counter on the left mimic its neighbor. To do this, you should use React's useState hook to create a state variable named counter1. When ready, open up 'App.jsx' and take a look.



// Running React on Repl.it

// React is a popular JavaScript library for building user interfaces.

// Vite is a blazing fast frontend build tool that includes features like Hot Module Reloading (HMR), optimized builds, and TypeScript support out of the box.

// Using the two in conjunction is one of the fastest ways to build a web app.

// Getting Started

// Hit run
// Edit App.jsx and watch it live update!
// By default, Replit runs the dev script, but you can configure it by changing the run field in the .replit file.