import React, { Component } from "react";
import rough from "roughjs/bin/rough";
import CodeFormat from "../Utilities/CodeFormatter.js";
import Iframe from "react-iframe";

class PreTest extends Component {
  test = React.createRef();
  canvasOne = React.createRef();

  constructor(props) {
    super(props);
  }

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
              <strong>GOAL:</strong> Figure out how to tailor content to you so
              we minimize the amount of time we spend repeating content you
              already know. It will not count against you in any way.
            </p>
            <p></p>
          </div>
          <Iframe
            frameborder="0"
            width="100%"
            height="500px"
            src="https://repl.it/@amasad/PitifulLastingWhoopingcrane?lite=true"
          />
        </section>
      </div>
    );
  }
}

export default PreTest;
