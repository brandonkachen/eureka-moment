import React from 'react'
import hljs from 'highlight.js'
import cpp from 'highlight.js/lib/languages/cpp'
hljs.registerLanguage('c++', cpp)

export class CodeFormatter extends React.PureComponent {

  componentDidMount(){
    hljs.highlightBlock(this.node)
  }

  render() {
    let { children } = this.props
    return (
      <pre
        ref={(node) => this.node = node}
      >
        <code className="c++">
          {children}
        </code>
      </pre>
    )
  }
}

export default CodeFormatter