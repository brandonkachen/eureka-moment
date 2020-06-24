import React from "react"
import reactStringReplace from "react-string-replace"
import firebase from "components/firebase-wrapper"
import { useObjectVal } from "react-firebase-hooks/database"
import thesaurus from "thesaurus"

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

const compareAnswers = (userAns, correctAns) => {
  console.log(userAns, correctAns)
  const sanUserAns = userAns.toLowerCase()
  const sanCorrectAns = correctAns.toLowerCase()

  // check against dictionary for synonym (TODO: spelling too)
  const synonyms = thesaurus.find(sanCorrectAns)
  for (const syn of synonyms) {
    if (sanUserAns === syn) {
      // console.log("synonym match!")
      return true
    }
  }

  // console.log("no synonym match")
  return sanUserAns === sanCorrectAns
}

const BlankComp = props => {
  if (!firebase) {
    return props.children
  }

  const baseRef = firebase.database().ref(props.baseRef)
  const ansRef = baseRef.child("answers/" + props.qid) // tracks correctness
  const handleSubmit = event => {
    event.preventDefault()

    // set up refs
    const userResp = getUserInput(event)
    const histRef = baseRef.child("history/" + props.qid) // tracks history of answers

    Object.entries(userResp).map(([key, value]) => {
      // create a new history entry
      const newhistRef = histRef.child(key).push()
      console.log(userResp, key)
      newhistRef.set(value)

      // set correctness, no history saved
      const isCorrect = compareAnswers(value, props.answers[key])
      ansRef.child(key).set(isCorrect)
    })
  }

  var children = props.children
  const [snapshot, loading, error] = useObjectVal(ansRef)

  // console.log(snapshot)
  if (loading) {
    console.log("loading")
  } else if (error) {
    console.log("error", error)
  } else {
    console.log(snapshot)

    children = reactStringReplace(
      props.children,
      /`____`\[(.*?)\]/g,
      (blankField, i) => {
        // key matches the index of the answers
        var key = blankField.match(/[a-zA-Z]+/g)

        var inputBoxStyle = {}
        if (snapshot) {
          if (snapshot[key]) {
            // user has already gotten answer correct, show it
            return (
              <mark
                key={i}
                style={{
                  padding: 3,
                  backgroundColor: "MediumAquamarine",
                  color: "Ivory",
                }}
              >
                {props.answers[key]}
              </mark>
            )
          }
          // user guessed the wrong answer before
          inputBoxStyle = {
            border: "2px solid red",
            borderRadius: `4px`,
          }
        }
        // user hasn't guessed the right answer
        return <input type="text" style={inputBoxStyle} name={key} key={i} />
      }
    )
  }

  return (
    <div className="box">
      <form onSubmit={handleSubmit} method="post">
        {children}
        <div style={{ paddingTop: `1.75rem` }} className="has-text-centered">
          <button class="button" type="submit">
            check
          </button>
        </div>
      </form>
    </div>
  )
}

export default BlankComp
