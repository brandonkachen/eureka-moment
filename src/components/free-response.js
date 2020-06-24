import React from "react"
import firebase from "components/firebase-wrapper"
import { useObjectVal } from "react-firebase-hooks/database"

const FreeRespComp = props => {
  if (!firebase) {
    return <p>building for gatsby</p>
  }

  const baseRef = firebase.database().ref(props.baseRef)
  const ansRef = baseRef.child("answers/" + props.qid) // tracks correctness
  const handleSubmit = event => {
    event.preventDefault()
    ansRef.set(event.target.elements[0].value)
  }

  var children = props.children
  const [snapshot, loading, error] = useObjectVal(ansRef)

  if (loading) {
    console.log("loading")
  } else if (error) {
    console.log("error", error)
  } else {
    children = snapshot ? (
      <>
        <p style={{ marginBottom: 20 }}>{snapshot}</p>
      </>
    ) : (
      <form onSubmit={handleSubmit} method="post">
        <div className="has-text-centered">
          <textarea name="textarea" id={props.qid} rows="4" cols="100" />
        </div>
        <div style={{ paddingTop: `1.75rem` }} className="has-text-centered">
          <button className="button" type="submit">
            submit
          </button>
        </div>
      </form>
    )
  }

  return <div className="box">{children}</div>
}

export default FreeRespComp
