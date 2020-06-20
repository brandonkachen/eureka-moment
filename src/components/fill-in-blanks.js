import React from "react"
import reactStringReplace from "react-string-replace"
import firebase from "gatsby-plugin-firebase"
import { useList } from "react-firebase-hooks/database"

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
  const baseRef = firebase.database().ref(props.baseRef)
  const ansRef = baseRef.child("answers/" + props.qid) // tracks correctness
  const handleSubmit = event => {
    event.preventDefault()

    // set up refs
    const userResp = getUserInput(event)
    const histRef = baseRef.child("history/" + props.qid) // tracks history of answers

    Object.entries(props.answers).map(([key, value]) => {
      // create a new history entry
      const newhistRef = histRef.child(key).push()
      newhistRef.set(userResp[key])

      // set correctness, no history saved
      ansRef.child(key).set(compareAnswers(value, userResp[key]))
    })
  }

  // var children = props.children
  // props.snapshots.map(v => {
  //   console.log(v)
  //   // console.log(props.answers)
  //   // if (props.answers.hasOwnProperty(v.key)) {
  //   //   // match all remaining blanks and replace with an input box
  //   //   console.log(v.key, v.val())
  //   //   children = reactStringReplace(children, /\[(.*?)\]/g, (match, i) => (
  //   //     <>
  //   //       {match.includes(v.key) && v.val() ? (
  //   //         <input
  //   //           type="text"
  //   //           name={Object.keys(props.answers)[(i - 1) / 2]}
  //   //           key={i}
  //   //         />
  //   //       ) : (
  //   //         "✅ " + props.answers[v.key] + " ✅"
  //   //       )}
  //   //     </>
  //   //   ))
  //   // }
  // })

  // const [snapshots, loading, error] = useList(ansRef)

  // snapshots.map(v => {
  //   children = reactStringReplace(props.children, /\[(.*?)\]/g, (match, i) => (
  //     // name this box with the key matching the index of the answers
  //     <>
  //       {match.includes(v.key) && v.val() ? (
  //         "✅ " + props.answers[v.key] + " ✅"
  //       ) : (
  //         <input
  //           type="text"
  //           name={Object.keys(props.answers)[(i - 1) / 2]}
  //           key={i}
  //         />
  //       )}
  //     </>
  //   ))
  // })

  // blanks are represented like this:
  // `____`[id]
  // where "id" is the id of the answer
  let children = reactStringReplace(
    props.children,
    /`____`\[(.*?)\]/g,
    (blank, i) => (
      // name this box with the matching key in props.answers
      <input type="text" name={blank.match(/[a-zA-Z]+/g)} key={i} />
    )
  )

  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        {children}
        <div className="has-text-centered">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default BlankComp
