import React from "react"

import { connect } from "react-redux"
import { Row, Col } from 'react-materialize';

import * as counterActions from "../actions/counterActions"
import Headline from "../components/Headline"

@connect(state => ({
  counters: state.counters,
}))

export default class MainContainer extends React.Component {
  handleClick() {
    let {dispatch} = this.props;
    dispatch(counterActions.increaseCounter())
  }

  render() {
    let {counters} = this.props;
    return (
        <div className="container">
          <Row>
            <Col s={12} m={12} l={12} className={'Center'}>
              <Headline>Sample App!</Headline>
              <div onClick={() => this.handleClick()}>INCREASE</div>
              <p>{counters.clicks}</p>
              <p>{process.env.BASE_API_URL}</p>
            </Col>
          </Row>
        </div>
    )
  }
}