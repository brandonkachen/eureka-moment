import React, { Component } from "react";
import rough from "roughjs/bin/rough";
import CodeFormat from "../Utilities/CodeFormatter.js";

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
      </div>
    );
  }
}

export default PreTest;
