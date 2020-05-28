import React from "react"
// import rough from "roughjs/bin/rough"

// const H1 = props => {
//   return (
//     <h1 href={props.href} style={{ textAlign: "left" }}>
//       {props.children}
//     </h1>
//   )
// }

const ExternalLink = props => {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  )
}

export default { a: ExternalLink }
// export default { h1: H1, a: ExternalLink }
