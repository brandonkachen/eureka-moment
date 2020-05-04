import React from 'react';
import './index.css';

const SampleLesson = () => (
  <div>
    {/* <section class="hero">
      <div class="hero-body">
        <div className="container">
          <canvas id="canvasZero" height="150px" width="1000px"></canvas>
          <h1 class="title">
            Eureka!
          </h1>
          <h2 class="subtitle">
            Your fun, <strong>discovery-based</strong>, interactive-ish online introductory computer science textbook
          </h2>
        </div>
      </div>
    </section> 

    <hr /> */}

    <section class="section">
      <div class="container">
        <canvas id="canvasOne"></canvas>
        <h1 class="title" id="test">Anatomy of a Lesson: Control Flow (Part 1)</h1>
        <h2 class="subtitle">
          estimated time of completion: <i>[time estimate]</i>. last updated: <i>[date uploaded]</i>
        </h2>
          <p>
            We'll outline a sample lesson to give you a sense for what the course is like.
            Please keep in mind that this will be quite rough at the beginning.
            Subsequent lessons will look and feel much better. This is typically where the 
            introduction to the lesson will go. In this case, we'll explain what you'll get 
            out of this lesson. Something like:
          </p>
          <p>
            <strong>Lesson Goal:</strong> Modify behavior of a program through if statements and while loops.
          </p>
      </div>
    </section>

    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <canvas id="canvasTwo"></canvas>
          <h1 class="title">
            Recap
          </h1>
          <h2 class="subtitle">
            This section is focused on summarizing the previous lesson, but at a very high level.
          </h2>
          
          <p>These are the topics we covered last time:</p>
          <ul>
            <li>Variables</li>
            <li>Basic Logic</li>
            <li>Program Execution</li>
            <li>Building a health bar</li>
          </ul>
          <p>
            <i>The items in the list will be expandable and collapsable in the future, to allow for quick recapping.</i>
          </p>
        </div>
      </div>
    </section>

    <section class="hero is-light">
      <div class="hero-body">
        <div class="container">
          <canvas id="canvasThree"></canvas>
          <h1 class="title">
            Lesson
          </h1>
          <h2 class="subtitle">
            This section will teach the lesson. At every step, we will guide the student to learn through discovery,
            build upon their knowledge through scaffolding, and test their understanding through complex scenarios 
            that grow from the basics they have learned.
          </h2>
      
          <div class="container-2">
            {/* <canvas id="canvasFour"></canvas> */}
            <h2 class="title">New Feature: Allow the user to choose an attack mechanism.</h2>
            <p>Let's add a new feature that allows the user to choose from these three attacks:<br></br>
            (Side Quest: build these attacks out yourself!)</p>
            <ul>
              <li>Thunder Shock</li>
              <li>Wild Charge</li>
              <li>Discharge</li>
            </ul>
            <p>1. Where should we divert the logic in the program, so we can execute the user's action?</p>
            <pre><code class="c++">{`
              #include <iostream>

              int main(int argc, char *argv[]) {
              
                /* An annoying "Hello World" example */
                for (auto i = 0; i < 0xFFFF; i++)
                  cout << "Hello, World!" << endl;
              
                char c = '\\n';
                unordered_map <string, vector<string> > m;
                m["key"] = "\\\\"; // this is an error
              
                return -2e3 + 12l;
              }
            `}</code></pre>

            <p>2. When we divert the logic, we're making a decision, right? Fill in the blank:</p>
            <p> ___ the user chooses 'Thunder Shock', we'll execute 'Thunder Shock'.</p>
            <p> ___ the user chooses 'Wild Charge', we'll execute 'Wild Charge'.</p>

            <p>3. This is what we call an if-statement. The C++ syntax for it is:</p>
            <pre><code class="c++">{`
              string user_action;
              cout << "Type an attack: "; // Type an attack and press enter
              cin >> user_action;
              if user_action == 'Thunder_Shock' {
                // code to handle 'Thunder_Shock' attack.
              } 
            `}</code></pre>

            <p><i>lesson continues on from here...</i></p>
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <canvas id="canvasTwo"></canvas>
          <h1 class="title">
            Summary
          </h1>
          <h2 class="subtitle">
            This section is focused on summarizing the current lesson, but at a high level.<br></br>
            It will also serve double duty as the recap for the next lesson
          </h2>
          
          <p>These are the topics we covered this time:</p>
          <ul>
            <li>If-statements</li>
            <li>For-loops</li>
          </ul>
          <p>
            <i>We will not allow collapsing for this list, as we want the student to read through everything.</i>
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <canvas id="canvasOne"></canvas>
        <h1 class="title" id="test">Challenge</h1>
        <h2 class="subtitle">
          This section will contain a challenge to the student, to use the knowledge they just acquired to
          modify the program in an interesting way. 
        </h2>
          <p>
            What will this program do? Why?
          </p>
          <pre><code class="c++">{`
            string user_action;
            cout << "Type an attack: "; // Type an attack and press enter
            cin >> user_action;
            while (true) {
              std:cout << "what will I do?" << std:endl;
            }
          `}</code></pre>
      </div>
    </section>
  </div>
);

export default SampleLesson;