import React from "react"
import reactStringReplace from "react-string-replace"

// const handleInput = event => {
//   console.log(event.key)

//   if (event.key === "Enter") {
//     // API call
//     alert(event.target.value)
//   }
// }

const handleSubmit = event => {
  event.preventDefault()
  let target = event.target
  let formData = {}

  for (let i = 0; i < target.length; i++) {
    let name = target.elements[i].getAttribute("name")
    if (name) {
      // only fields with valid `name` atts will be submitted
      formData[name] = target.elements[i].value
    }
  }

  // api call
  console.log("formData", formData)
}

const BlankComp = props => {
  // console.log(props.children)
  let retProps = reactStringReplace(props.children, /(`___`)/g, (match, i) => (
    <input type="text" name={(i - 1) / 2} key={i} />
  ))
  console.log(retProps)

  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        {retProps}
        <div className="has-text-centered">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default BlankComp
