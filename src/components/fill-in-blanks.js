import React from "react"
import reactStringReplace from "react-string-replace"
import firebase from "gatsby-plugin-firebase"

// const handleInput = event => {
//   console.log(event.key)

//   if (event.key === "Enter") {
//     // API call
//     alert(event.target.value)
//   }
// }

const getUserInput = event => {
  let target = event.target
  let formData = {}

  for (let i = 0; i < target.length; i++) {
    let name = target.elements[i].getAttribute("name")
    if (name) {
      // only fields with valid `name` atts will be submitted
      formData[name] = target.elements[i].value
    }
  }
  return formData
}

const compareAnswers = (k, v) => {
  console.log(k, v)
  // check against dictionary for spelling & synonym

  return k.toLowerCase() === v.toLowerCase()
}

const BlankComp = props => {
  const handleSubmit = event => {
    event.preventDefault()
    const userResp = getUserInput(event)
    const qRef = firebase.database().ref(props.baseRef + "/" + props.qid)

    for (const [i, value] of props.answers.entries()) {
      // get sub-problem ref
      var ref = qRef.child(i)

      // log attempt in a new entry
      const newhistRef = ref.child("history").push()
      newhistRef.set(userResp[i])

      // set correctness
      ref.update({
        is_correct: compareAnswers(value, userResp[i]),
      })
    }
  }

  let retProps = reactStringReplace(props.children, /(`___`)/g, (match, i) => (
    <input type="text" name={(i - 1) / 2} key={i} />
  ))

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
