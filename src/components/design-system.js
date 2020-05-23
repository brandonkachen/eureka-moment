import React, { Component } from "react"
import "./layout.scss"
import rough from "roughjs/bin/rough"

class H1 extends Component {
  canvas = React.createRef()
  box = React.createRef()

  componentDidMount() {
    var box = this.box.current
    var canvas = this.canvas.current
    canvas.width = box.offsetWidth
    canvas.height = box.offsetHeight

    var rc = rough.canvas(canvas)
    rc.rectangle(10, 10, canvas.width - 20, canvas.height * 0.7) // x, y, width, height
  }

  render() {
    return (
      <section className="hero is-bold">
        <canvas ref={this.canvas}> </canvas>
        <div className="hero-body" ref={this.box}>
          <div className="container">
            <h1 {...this.props}>{this.props.children}</h1>
          </div>
        </div>
      </section>
    )
  }
}

export { H1 }
