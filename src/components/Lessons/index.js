import React, { Component } from "react";
import "./index.css";
import rough from "roughjs/bin/rough";
import CodeFormat from "../Utilities/CodeFormatter.js";

class SampleLesson extends Component {
  test = React.createRef();
  canvasOne = React.createRef();
  canvasTwo = React.createRef();
  canvasThree = React.createRef();

  componentDidMount() {
    var box = this.test.current;
    var canvasOne = this.canvasOne.current;
    canvasOne.width = box.offsetWidth + 100;
    canvasOne.height = box.offsetHeight * 3 + 100;

    var rc = rough.canvas(canvasOne);
    rc.rectangle(10, 10, canvasOne.width - 80, canvasOne.height - 100); // x, y, width, height

    var canvasTwo = this.canvasTwo.current;
    canvasTwo.width = box.offsetWidth + 100;
    canvasTwo.height = box.offsetHeight * 3 + 100;

    var rc2 = rough.canvas(canvasTwo);
    rc2.rectangle(10, 10, canvasTwo.width - 80, canvasTwo.height - 100, {
      bowing: 2,
      stroke: "white",
      strokeWidth: 2,
    });

    var canvasThree = this.canvasThree.current;
    canvasThree.width = box.offsetWidth + 100;
    canvasThree.height = box.offsetHeight * 3.5 + 100;

    var rc3 = rough.canvas(canvasThree);
    rc3.rectangle(10, 10, canvasThree.width - 80, canvasThree.height - 100, {
      bowing: 2,
      stroke: "green",
      strokeWidth: 2,
    });
  }

  render() {
    return (
      <div>
        <section className="section">
          <div className="container">
            <canvas ref={this.canvasOne}></canvas>
            <h1 className="title" ref={this.test}>
              Anatomy of a Lesson: Control Flow (Part 1)
            </h1>
            <h2 className="subtitle">
              estimated time of completion: <i>[time estimate]</i>. last
              updated: <i>[date uploaded]</i>
            </h2>
            <p>
              We'll outline a sample lesson to give you a sense for what the
              course is like. Please keep in mind that this will be quite rough
              at the beginning. Subsequent lessons will look and feel much
              better. This is typically where the introduction to the lesson
              will go. In this case, we'll explain what you'll get out of this
              lesson. Something like:
            </p>
            <p>
              <strong>Lesson Goal:</strong> Modify behavior of a program through
              if statements and while loops.
            </p>
          </div>
        </section>

        <section className="hero is-dark">
          <div className="hero-body">
            <div className="container">
              <canvas ref={this.canvasTwo}></canvas>
              <h1 className="title">Recap</h1>
              <h2 className="subtitle">
                This section is focused on summarizing the previous lesson, but
                at a very high level.
              </h2>

              <p>These are the topics we covered last time:</p>
              <ul>
                <li>Variables</li>
                <li>Basic Logic</li>
                <li>Program Execution</li>
                <li>Building a health bar</li>
              </ul>
              <p>
                <i>
                  The items in the list will be expandable and collapsable in
                  the future, to allow for quick recapping.
                </i>
              </p>
            </div>
          </div>
        </section>

        <section className="hero is-light">
          <div className="hero-body">
            <div className="container">
              <canvas ref={this.canvasThree}></canvas>
              <h1 className="title">Lesson</h1>
              <h2 className="subtitle">
                This section will teach the lesson. At every step, we will guide
                the student to learn through discovery, build upon their
                knowledge through scaffolding, and test their understanding
                through complex scenarios that grow from the basics they have
                learned.
              </h2>

              <div className="container-2">
                {/* <canvas id="canvasFour"></canvas> */}
                <h2 className="title">
                  New Feature: Allow the user to choose an attack mechanism.
                </h2>
                <p>
                  Let's add a new feature that allows the user to choose from
                  these three attacks:<br></br>
                  (Side Quest: build these attacks out yourself!)
                </p>
                <ul>
                  <li>Thunder Shock</li>
                  <li>Wild Charge</li>
                  <li>Discharge</li>
                </ul>
                <p>
                  1. Where should we divert the logic in the program, so we can
                  execute the user's action?
                </p>
                <CodeFormat>{`
                  #include <iostream>

                  int main(int argc, char *argv[]) {
                  
                    /* An annoying "Hello World" example */
                    for (auto i = 0; i < 0xFFFF; i++)
                      cout << "Hello, World!" << endl;
                  
                    char c = '\\n';
                    unordered_map <string, vector<string> > m;
                    m["key"] = "\\\\"; // this is an error
                  
                    return -2e3 + 12l;
                `}</CodeFormat>
                <p>
                  2. When we divert the logic, we're making a decision, right?
                  Fill in the blank:
                </p>
                <p>
                  {" "}
                  ___ the user chooses 'Thunder Shock', we'll execute 'Thunder
                  Shock'.
                </p>
                <p>
                  {" "}
                  ___ the user chooses 'Wild Charge', we'll execute 'Wild
                  Charge'.
                </p>

                <p>
                  3. This is what we call an if-statement. The C++ syntax for it
                  is:
                </p>
                <CodeFormat>{`
                  string user_action;
                  std::cout << "Type an attack: "; // Type an attack and press enter
                  std::cin >> user_action;
                  if (user_action == "Thunder_Shock") {
                    // code to handle "Thunder_Shock" attack.
                  } 
                `}</CodeFormat>

                <p>
                  <i>lesson continues on from here...</i>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="hero is-dark">
          <div className="hero-body">
            <div className="container">
              <canvas id="canvasTwo"></canvas>
              <h1 className="title">Summary</h1>
              <h2 className="subtitle">
                This section is focused on summarizing the current lesson, but
                at a high level.<br></br>
                It will also serve double duty as the recap for the next lesson
              </h2>

              <p>These are the topics we covered this time:</p>
              <ul>
                <li>If-statements</li>
                <li>For-loops</li>
              </ul>
              <p>
                <i>
                  We will not allow collapsing for this list, as we want the
                  student to read through everything.
                </i>
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <canvas id="canvasOne"></canvas>
            <h1 className="title" id="test">
              Challenge
            </h1>
            <h2 className="subtitle">
              This section will contain a challenge to the student, to use the
              knowledge they just acquired to modify the program in an
              interesting way.
            </h2>
            <p>What will this program do? Why?</p>
            <CodeFormat>{`
              string user_action;
              std::cout << "Type an attack: "; // Type an attack and press enter
              std::cin >> user_action;
              while (true) {
                std:cout << "what will I do?" << std:endl;
              }
            `}</CodeFormat>
          </div>
        </section>
      </div>
    );
  }
}

export default SampleLesson;
