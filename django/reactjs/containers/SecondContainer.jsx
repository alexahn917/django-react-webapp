import React from "react"
import Headline from "../components/Headline"

export default class SecondContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Headline>Second App!</Headline>
          </div>
        </div>
      </div>
    )
  }
}
