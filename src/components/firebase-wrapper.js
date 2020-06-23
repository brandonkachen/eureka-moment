import firebase from "gatsby-plugin-firebase"

const isNode = typeof window === "undefined"

// const lazy = fn => {
//   let isLoaded = false
//   let result
//   return () => {
//     if (!isLoaded) {
//       isLoaded = true
//       result = fn()
//     }
//     return result
//   }
// }

// const app = lazy(() => firebase)
// const auth = lazy(() => app().auth())

// export { app, auth }

export default isNode ? null : firebase
// export default firebase
