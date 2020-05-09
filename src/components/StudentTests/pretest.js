import React, { Component } from "react";
import rough from "roughjs/bin/rough";
import CodeFormat from "../Utilities/CodeFormatter.js";

class PreTest extends Component {
  test = React.createRef();
  canvasOne = React.createRef();

  componentDidMount() {
    var box = this.test.current;
    var canvasOne = this.canvasOne.current;
    canvasOne.width = box.offsetWidth + 100;
    canvasOne.height = box.offsetHeight * 3 + 100;

    var rc = rough.canvas(canvasOne);
    rc.rectangle(10, 10, canvasOne.width - 80, canvasOne.height - 100); // x, y, width, height
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
              <strong>GOAL: </strong>Figure out how to tailor content to you so
              we minimize the amount of time we spend repeating content you
              already know. It will not count against you in any way.
            </p>
            <p>
              See this{" "}
              <a
                href="https://github.com/godith0/eureka-moment-repls/blob/pretest/README.md"
                target="_blank"
              >
                README
              </a>{" "}
              for information on how to get started.
            </p>
          </div>
          <hr></hr>
          <iframe
            frameborder="0"
            width="100%"
            height="800px"
            src="https://repl.it/@brandonchen95/eureka-moment-repls?lite=true"
          ></iframe>
        </section>
      </div>
    );
  }
}

export default PreTest;
