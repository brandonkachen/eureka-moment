import React, { Component } from "react";
import rough from "roughjs/bin/rough";
import CodeFormat from "../Utilities/CodeFormatter.js";
import Iframe from "react-iframe";

class PreTest extends Component {
  test = React.createRef();
  canvasOne = React.createRef();
  canvasTwo = React.createRef();

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
  }

  render() {
    return (
      <div>
        <section className="section">
          <div className="container">
            <canvas ref={this.canvasOne}></canvas>
            <h1 className="title" ref={this.test}>
              Pre-test
            </h1>
            <h2 className="subtitle">
              This will help us get a sense for your current coding skills.
            </h2>
            <p>
              <strong>GOAL:</strong> Figure out how to tailor content to you so
              we minimize the amount of time we spend repeating content you
              already know. It will not count against you in any way.
            </p>
            <p>
              Below, you'll see a mini-IDE that's been prepared for you to code
              in. To get started, hit the "Files" icon on the upper left and
              switch to "main.cs".
            </p>
          </div>
        </section>

        <section className="hero is-info">
          <div className="hero-body">
            <div className="container">
              <canvas ref={this.canvasTwo}></canvas>
              <h1 className="title">Problem #X</h1>
              <h2 className="subtitle">Unique Names</h2>

              <p>
                Implement the UniqueNames method. When passed two arrays of
                names, it will return an array containing the names that appear
                in either or both arrays. The returned array should have no
                duplicates.
              </p>
              <p>
                For example, calling the following should return an array
                containing <strong>Ava, Emma, Olivia, and Sophia</strong> in any
                order:
              </p>
              <CodeFormat>{`
                MergeNames.UniqueNames(new string[]{'Ava', 'Emma', 'Olivia'}, new string[]{'Olivia', 'Sophia', 'Emma'})
             `}</CodeFormat>
            </div>
          </div>
          <Iframe
            height="1000px"
            width="100%"
            src="https://repl.it/@brandonchen95/unique-names?lite=true"
            scrolling="no"
            frameborder="no"
            allowtransparency="true"
            allowfullscreen="true"
            sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
          />
        </section>
      </div>
    );
  }
}

export default PreTest;
