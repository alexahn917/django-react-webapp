import * as sampleActions from "../Actions/counterActions"

const initialState = {
  clicks: 0,
}

export default function submissions(state=initialState, action={}) {
  switch (action.type) {
  case sampleActions.INCREASE:
    return {...state, clicks: state.clicks + 1}
  default:
    return state
  }
}
