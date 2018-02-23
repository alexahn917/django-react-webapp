import React from "react"
import { render } from "react-dom"

import SecondContainer from "./containers/SecondContainer"

class SecondApp extends React.Component {
  render() {
    return (
      <SecondContainer />
    )
  }
}

render(<SecondApp />, document.getElementById('SecondApp'))
